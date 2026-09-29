<div align="center">

![Hero](dash-assets/hero.svg)

![KPI](dash-assets/kpi.svg)

<br/>

<a href="#projects"><img src="https://img.shields.io/badge/%F0%9F%93%82_Projects-2E4BFF?style=for-the-badge" alt="Projects"/></a> <a href="#stack"><img src="https://img.shields.io/badge/%F0%9F%9B%A0%EF%B8%8F_Stack-F0F2F7?style=for-the-badge" alt="Stack"/></a> <a href="#stats"><img src="https://img.shields.io/badge/%F0%9F%93%8C_Stats-F0F2F7?style=for-the-badge" alt="Stats"/></a> <a href="#contact"><img src="https://img.shields.io/badge/%F0%9F%93%A7_Contact-F0F2F7?style=for-the-badge" alt="Contact"/></a>

</div>

---

## 👤 Обо мне

<table>
<tr>
<td width="128" align="center" valign="middle">
  <img src="https://avatars.githubusercontent.com/u/25911491?s=200&v=4" width="104" alt="avatar"/>
</td>
<td valign="middle">

### MeX · <span style="color:#2E4BFF">Mextrim</span>

🏠 Работаю из дома · 📍 Parabel
**C# / .NET 10 / WPF** — десктопные инструменты · **Rust** — аудио DSP · **JavaScript** — браузерные расширения

</td>
<td width="230" align="center" valign="middle">
  <img src="https://komarev.com/ghpvc/?username=Mextrim&style=for-the-badge&color=2E4BFF" alt="views"/>
  <br/>
  <img src="https://img.shields.io/github/followers/Mextrim?style=for-the-badge&label=Followers" alt="followers"/>
</td>
</tr>
</table>

```csharp
var me = new Developer("Mextrim aka MeX")
{
    Location = "Parabel, работаю из дома",
    Focus    = new[] { "Desktop Tools", "GTA V Modding", "Audio DSP", "Browser Extensions" },
    Stack    = new[] { "C#", ".NET 10", "WPF / XAML", "Rust", "JavaScript" },
    Motto    = "Удобство > фичи. Один клик вместо десяти."
};
```

Сейчас в работе:

- ✂️ **[KazanClothTool](https://github.com/Mextrim/KazanClothTool)** — редактор одежды и текстур для GTA V: 35 тем, 3 языка, сборка под FiveM / Alt:V / Singleplayer
- 🎛️ **[MexPlug](https://github.com/Mextrim/MexPlug)** — VST3 / CLAP плагин: punchy auto-mix + analog liveliness на Rust, 0 аллокаций на аудио-потоке
- 💧 **[twitch-drops-farmer](https://github.com/Mextrim/twitch-drops-farmer)** — расширение для Chrome / Edge: само находит каналы с включёнными дропами и крутит их по таймеру
- 🐍 **[twitch-drops](https://github.com/Mextrim/twitch-drops)** — трекер прогресса дропсов с автоклеймом наград, сборка в один `.exe`

Люблю WPF, кастомные темы, Material Design Icons, CodeWalker и DSP. Подробная документация — в Wiki проектов.

---

## 🚀 Projects

<table>
<tr>
<td width="50%" valign="top">

**✂️ KazanClothTool** — редактор одежды и текстур для GTA V

`C#` · `.NET 10` · `WPF` · FiveM · Alt:V · Singleplayer

- 🖥️ Windows x64 · 🎨 35 тем · 🌍 RU / UA / EN без перезапуска
- 📦 Сборка: FiveM + `fxmanifest` · Alt:V + `resource.toml` · SP `dlc.rpf`
- 🧊 3D-просмотр · 💾 `.kctproject` · автосейв каждые 60 сек

[![ACTIVE](https://img.shields.io/badge/ACTIVE-2E4BFF?style=flat-square)](https://github.com/Mextrim/KazanClothTool/releases)
[Repo](https://github.com/Mextrim/KazanClothTool) · [Wiki](https://github.com/Mextrim/KazanClothTool/wiki) · [Сайт](https://mextrim.github.io/KazanClothTool/)

</td>
<td width="50%" valign="top">

**🎛️ MexPlug** — punchy auto-mix + analog liveliness

`Rust` · `nice-plug` · `DSP` · VST3 · CLAP

- 🦀 ~0.33 мкс/фрейм · 🚫 0 аллокаций на аудио-потоке
- ✅ pluginval strict 5 — SUCCESS
- 🎚️ 19 ручек · 8 пресетов · DICE · A/B · 5 тем

[![ACTIVE](https://img.shields.io/badge/ACTIVE-2E4BFF?style=flat-square)](https://github.com/Mextrim/MexPlug/releases)
[Repo](https://github.com/Mextrim/MexPlug) · [Releases](https://github.com/Mextrim/MexPlug/releases)

</td>
</tr>
<tr>
<td valign="top">

**💧 twitch-drops-farmer** — автофарм Twitch Drops

`JavaScript` · `Manifest V3` · Chrome / Edge 120+

- 🎯 Поиск каналов с дропами через GraphQL Twitch
- 🔄 Ротация 1–4 фоновых вкладок по таймеру
- 🔇 160p + mute · 🔔 уведомления · 🚫 стоп-слова

[![MV3](https://img.shields.io/badge/MV3-2E4BFF?style=flat-square)](https://github.com/Mextrim/twitch-drops-farmer)
[Repo](https://github.com/Mextrim/twitch-drops-farmer) · [Release](https://github.com/Mextrim/twitch-drops-farmer/releases)

</td>
<td valign="top">

**🐍 twitch-drops** — трекер дропов с автоклеймом

`Python` · панель в браузере · один `.exe`

- 📈 Прогресс и таймеры по активным дропам
- 🤖 Автоклейм наград
- 📦 Сборка в один исполняемый файл

[![EXE](https://img.shields.io/badge/EXE-00B69B?style=flat-square)](https://github.com/Mextrim/twitch-drops/releases)
[Repo](https://github.com/Mextrim/twitch-drops) · [Releases](https://github.com/Mextrim/twitch-drops/releases)

</td>
</tr>
</table>

> 🔔 **Свежий релиз:** [KazanClothTool **v1.14.0**](https://github.com/Mextrim/KazanClothTool/releases/download/v1.14.0/KazanClothTool-v1.14.0-win-x64.zip) — portable ZIP, установка не нужна.

---

## 🧰 Stack

<p align="center">
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#"/>
  <img src="https://img.shields.io/badge/.NET_10-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET"/>
  <img src="https://img.shields.io/badge/WPF-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="WPF"/>
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/VST3-1DB954?style=for-the-badge&logoColor=white" alt="VST3"/>
  <img src="https://img.shields.io/badge/CLAP-F59E0B?style=for-the-badge&logoColor=white" alt="CLAP"/>
  <img src="https://img.shields.io/badge/CodeWalker-FF6B00?style=for-the-badge&logo=unity&logoColor=white" alt="CodeWalker"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Actions"/>
</p>

<details>
<summary><b>Детальнее по инструментам</b></summary>
<br/>

- **Desktop:** C#, .NET 10, WPF, MVVM, XAML, Win32 API
- **Audio:** Rust, nice-plug, VST3 / CLAP, DSP (saturation, tape, glue-comp, limiter), pluginval strict 5
- **Web / Extensions:** JavaScript, Manifest V3, Chrome Extensions API, GraphQL
- **GTA / Modding:** CodeWalker, YTD / YDD / YFT, meta / fxmanifest / resource.toml, dlc.rpf
- **Deploy:** GitHub Actions, NSIS Setup.exe, portable ZIP, Releases + Wiki
- **UI/UX:** 35 кастомных тем, RU / UA / EN без перезапуска, Material Design Icons 7400+

</details>

---

## 📊 Stats

<div align="center">
<img src="https://streak-stats.demolab.com?user=Mextrim&theme=tokyonight&hide_border=true&background=0d1117" alt="streak" width="100%"/>
</div>

![Languages](dash-assets/langs.svg)

<details>
<summary><b>Визуальный стиль GitHub</b></summary>
<br/>

Профиль построен как дашборд: все цифры в виджетах собираются автоматически
скриптом `tools/dashboard.mjs` из GitHub API и обновляются по расписанию —
поэтому счётчики не расходятся с реальностью.

</details>

---

## 📬 Contact

<p align="center">
  <a href="https://t.me/mextrim"><img src="https://img.shields.io/badge/Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white" alt="telegram"/></a>
  &nbsp;
  <a href="https://vk.com/mextrim"><img src="https://img.shields.io/badge/VK-0077FF?style=for-the-badge&logo=vk&logoColor=white" alt="vk"/></a>
  &nbsp;
  <a href="https://discord.com/users/1393850947544944650"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord"/></a>
</p>

---

<p align="center">
<sub>© 2026 MeX · виджеты генерируются автоматически · иконки: Simple Icons / Shields</sub>
</p>
