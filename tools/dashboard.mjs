/**
 * Генератор виджетов профиля GitHub.
 *
 * Тянет живые данные через GitHub API и пересобирает SVG-виджеты, чтобы
 * цифры на странице профиля не устаревали. Запускается вручную или по
 * расписанию из .github/workflows/dashboard.yml.
 *
 * Локально:  node tools/dashboard.mjs
 * В CI:      GITHUB_TOKEN передаётся автоматически
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const run = promisify(execFile);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dash-assets');
const USER = process.env.DASHBOARD_USER || 'Mextrim';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

/** Цветовая система профиля */
const C = {
  ink: '#0B1220',
  ink2: '#152040',
  accent: '#2E4BFF',
  accentSoft: '#8FA4FF',
  teal: '#00B69B',
  amber: '#FFB800',
  text: '#FFFFFF',
  dim: '#A8B2CC',
  card: '#FFFFFF',
  cardBorder: '#E6EAF2',
  muted: '#8A8FA3',
  track: '#EDF0F6',
};

// ------------------------------------------------------------------ данные

async function api(path) {
  if (TOKEN) {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'dashboard-generator',
      },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status} на ${path}`);
    return res.json();
  }
  // Локально: авторизованный gh CLI
  const { stdout } = await run('gh', ['api', path], { maxBuffer: 32 * 1024 * 1024 });
  return JSON.parse(stdout);
}

const esc = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);

const fmt = (n) => n.toLocaleString('en-US');

/** Обрезает строку по длине, чтобы влезала в карточку. */
function clip(text, max) {
  const s = String(text);
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

async function collect() {
  const [profile, repos, orgs] = await Promise.all([
    api(`/users/${USER}`),
    api(`/users/${USER}/repos?per_page=100&sort=updated`),
    api(`/users/${USER}/orgs`).catch(() => []),
  ]);

  const own = repos.filter((r) => !r.fork);
  const stars = own.reduce((sum, r) => sum + r.stargazers_count, 0);
  const forks = own.reduce((sum, r) => sum + r.forks_count, 0);

  // Суммарные байты по языкам
  const langBytes = new Map();
  for (const repo of own) {
    let langs = {};
    try {
      langs = await api(`/repos/${USER}/${repo.name}/languages`);
    } catch {
      continue;
    }
    for (const [name, bytes] of Object.entries(langs)) {
      langBytes.set(name, (langBytes.get(name) || 0) + bytes);
    }
  }
  const languages = [...langBytes.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, bytes]) => ({ name, bytes }));

  // Самый свежий релиз среди своих репозиториев
  let latest = null;
  for (const repo of own) {
    let rel = null;
    try {
      rel = await api(`/repos/${USER}/${repo.name}/releases/latest`);
    } catch {
      continue;
    }
    if (!rel?.tag_name) continue;
    if (!latest || new Date(rel.published_at) > new Date(latest.publishedAt)) {
      latest = {
        repo: repo.name,
        tag: rel.tag_name,
        name: rel.name || rel.tag_name,
        publishedAt: rel.published_at,
        url: rel.html_url,
      };
    }
  }

  const created = new Date(profile.created_at);
  const years = Math.max(1, Math.floor((Date.now() - created.getTime()) / 31_557_600_000));

  return { profile, own, stars, forks, languages, latest, years, orgs: orgs.length };
}

// ------------------------------------------------------------------ виджеты

const HEAD = (w, h) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Inter, 'Segoe UI', Helvetica, Arial, sans-serif">`;

/** Подбирает кегль так, чтобы строка гарантированно влезла в карточку. */
function fitFont(text, maxWidth, maxSize, minSize = 14) {
  // Для Segoe UI / Inter средняя ширина символа ≈ 0.56 от кегля.
  let size = maxSize;
  while (size > minSize && text.length * size * 0.56 > maxWidth) size -= 1;
  return size;
}

function hero(d) {
  const w = 1200;
  const h = 340;
  const name = d.profile.name || USER;
  const pills = [
    ['Desktop Tools', 168],
    ['GTA V Modding', 190],
    ['Audio DSP', 150],
    ['Browser Extensions', 210],
  ];
  let px = 64;
  const pillsSvg = pills
    .map(([label, pw]) => {
      const s = `    <rect x="${px}" y="256" width="${pw}" height="46" rx="23" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.18"/>
    <text x="${px + pw / 2}" y="285" font-size="18" font-weight="600" fill="#DCE3F7" text-anchor="middle">${esc(label)}</text>`;
      px += pw + 12;
      return s;
    })
    .join('\n');

  const rel = d.latest;
  const relName = rel ? rel.repo : '—';
  const relTag = rel ? rel.tag : '—';
  const relFont = fitFont(relName, 204, 26, 16);
  const tagFont = fitFont(relTag, 204, 44, 24);

  return `${HEAD(w, h)}
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A0F1F"/>
      <stop offset="0.55" stop-color="#101A38"/>
      <stop offset="1" stop-color="#0A1226"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#2E4BFF" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#2E4BFF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#00B69B" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#00B69B" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2E4BFF"/>
      <stop offset="1" stop-color="#00B69B"/>
    </linearGradient>
    <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
      <path d="M34 0 L0 0 0 34" fill="none" stroke="#ffffff" stroke-opacity="0.035"/>
    </pattern>
  </defs>

  <rect width="${w}" height="${h}" rx="24" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" rx="24" fill="url(#grid)"/>
  <ellipse cx="120" cy="40" rx="420" ry="280" fill="url(#glowA)"/>
  <ellipse cx="1140" cy="330" rx="380" ry="220" fill="url(#glowB)"/>

  <text x="64" y="86" font-size="14" font-weight="700" fill="#00D3B8" letter-spacing="3.2">DEVELOPER DASHBOARD</text>
  <text x="64" y="164" font-size="72" font-weight="800" fill="${C.text}" letter-spacing="-2">MeX</text>
  <text x="212" y="164" font-size="34" font-weight="500" fill="${C.accentSoft}">· ${esc(name)}</text>
  <text x="66" y="212" font-size="21" fill="${C.dim}">C# · .NET 10 · WPF · Rust · Audio DSP · Browser Extensions</text>

${pillsSvg}

  <g>
    <rect x="880" y="62" width="256" height="216" rx="18" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.14"/>
    <text x="906" y="104" font-size="14" font-weight="700" fill="#7E8AB0" letter-spacing="1.8">LATEST RELEASE</text>
    <text x="906" y="146" font-size="${relFont}" font-weight="700" fill="${C.text}">${esc(relName)}</text>
    <text x="906" y="196" font-size="${tagFont}" font-weight="800" fill="#6E86FF" letter-spacing="-1">${esc(relTag)}</text>
    <rect x="906" y="216" width="128" height="36" rx="18" fill="#00B69B" fill-opacity="0.16" stroke="#00B69B" stroke-opacity="0.45"/>
    <circle cx="928" cy="234" r="6" fill="${C.teal}"/>
    <text x="944" y="241" font-size="16" font-weight="700" fill="#4FE3CE">Releases</text>
  </g>

  <rect x="0" y="${h - 3}" width="${w}" height="3" rx="1.5" fill="url(#accent)"/>
</svg>
`;
}

function kpi(d) {
  const w = 1200;
  const h = 216;
  const cardW = 282;
  const gap = 24;
  const accent = C.accent;

  const cards = [
    {
      label: 'Projects',
      value: fmt(d.own.length),
      note: d.orgs ? `${fmt(d.forks)} форков · ${d.orgs} org` : 'собственные репозитории',
      pct: 100,
      color: accent,
    },
    { label: 'Stars', value: fmt(d.stars), note: 'по всем проектам', pct: Math.min(100, d.stars * 12), color: C.amber },
    {
      label: 'Followers',
      value: fmt(d.profile.followers),
      note: d.profile.followers > 1 ? 'спасибо, что подписаны' : 'ждём первого',
      pct: Math.min(100, Math.max(8, d.profile.followers * 25)),
      color: C.teal,
    },
    { label: 'Years on GitHub', value: fmt(d.years), note: `since ${new Date(d.profile.created_at).getFullYear()}`, pct: Math.min(100, d.years * 11), color: '#8B5CF6' },
  ];

  const body = cards
    .map((card, i) => {
      const x = i * (cardW + gap);
      const barW = Math.max(6, Math.round((cardW - 56) * (card.pct / 100)));
      return `  <g>
    <rect x="${x}" y="0" width="${cardW}" height="${h}" rx="20" fill="${C.card}" stroke="${C.cardBorder}" stroke-width="2"/>
    <rect x="${x + 28}" y="30" width="8" height="34" rx="4" fill="${card.color}"/>
    <text x="${x + 50}" y="54" font-size="18" font-weight="600" fill="${C.muted}">${esc(card.label)}</text>
    <text x="${x + 28}" y="132" font-size="64" font-weight="800" fill="#141824" letter-spacing="-2.5">${card.value}</text>
    <text x="${x + 28}" y="170" font-size="16" fill="${C.muted}">${esc(card.note)}</text>
    <rect x="${x + 28}" y="188" width="${cardW - 56}" height="8" rx="4" fill="${C.track}"/>
    <rect x="${x + 28}" y="188" width="${barW}" height="8" rx="4" fill="${card.color}"/>
  </g>`;
    })
    .join('\n');

  return `${HEAD(w, h)}
${body}
</svg>
`;
}

function langs(d) {
  const w = 1200;
  const rowH = 46;
  const h = 46 + d.languages.length * rowH;
  const total = d.languages.reduce((s, l) => s + l.bytes, 0) || 1;
  const palette = ['#2E4BFF', '#00B69B', '#FFB800', '#8B5CF6', '#FF6B6B', '#38BDF8'];

  const rows = d.languages
    .map((lang, i) => {
      const y = 46 + i * rowH;
      const share = lang.bytes / total;
      const barW = Math.max(4, Math.round(share * 760));
      const color = palette[i % palette.length];
      return `  <g>
    <text x="0" y="${y + 22}" font-size="19" font-weight="600" fill="#141824">${esc(clip(lang.name, 14))}</text>
    <rect x="180" y="${y + 6}" width="760" height="20" rx="10" fill="${C.track}"/>
    <rect x="180" y="${y + 6}" width="${barW}" height="20" rx="10" fill="${color}"/>
    <text x="960" y="${y + 22}" font-size="19" font-weight="700" fill="#141824">${(share * 100).toFixed(1)}%</text>
  </g>`;
    })
    .join('\n');

  return `${HEAD(w, h)}
  <rect width="${w}" height="${h}" rx="20" fill="${C.card}" stroke="${C.cardBorder}" stroke-width="2"/>
  <text x="28" y="34" font-size="16" font-weight="700" fill="${C.muted}" letter-spacing="1.6">LANGUAGES · BY CODE SIZE</text>
${rows}
</svg>
`;
}

// --------------------------------------------------------------------- main

const data = await collect();
await mkdir(OUT, { recursive: true });

const files = {
  'hero.svg': hero(data),
  'kpi.svg': kpi(data),
  'langs.svg': langs(data),
};

for (const [name, content] of Object.entries(files)) {
  await writeFile(join(OUT, name), content);
  console.log(`записан dash-assets/${name}`);
}

console.log(
  `\nданные: проектов ${data.own.length}, звёзд ${data.stars}, подписчиков ${data.profile.followers}, лет ${data.years}`,
);
console.log(`языки: ${data.languages.map((l) => `${l.name} ${(l.bytes / 1024 / 1024).toFixed(1)}MB`).join(', ')}`);
if (data.latest) console.log(`последний релиз: ${data.latest.repo} ${data.latest.tag}`);
