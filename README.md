![MeX Dev Dashboard](dash-assets/hero.svg)

![Topbar](dash-assets/topbar.svg)

<p align="center">
  <a href="#dashboard"><img src="https://img.shields.io/badge/◉_Dashboard-2E4BFF?style=for-the-badge" alt="Dashboard"/></a>
  <a href="#projects"><img src="https://img.shields.io/badge/Projects-F0F2F7?style=for-the-badge" alt="Projects"/></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Stack-F0F2F7?style=for-the-badge" alt="Stack"/></a>
  <a href="#statistics"><img src="https://img.shields.io/badge/Statistics-F0F2F7?style=for-the-badge" alt="Statistics"/></a>
  <a href="#contact"><img src="https://img.shields.io/badge/Inbox-F0F2F7?style=for-the-badge" alt="Inbox"/></a>
</p>

## Dashboard

<table>
<tr>
<td width="120" align="center" valign="middle">
<img src="https://avatars.githubusercontent.com/u/25911491?s=160&v=4" width="100" alt="avatar"/>
</td>
<td valign="middle">

### MeX · Mextrim
🏠 Working from home · 📍 Parabel
<br/>
C# / Rust · GTA V modding · Audio DSP

</td>
<td width="220" align="center" valign="middle">
<img src="https://komarev.com/ghpvc/?username=Mextrim&style=for-the-badge&color=2E4BFF" alt="views"/>
<br/>
<img src="https://img.shields.io/github/followers/Mextrim?style=for-the-badge&label=Followers" alt="followers"/>
</td>
</tr>
</table>

![KPI](dash-assets/kpi.svg)

### 👤 User Profile

```csharp
var me = new Developer("Mextrim aka MeX")
{
    Location = "Parabel, Working from home",
    Focus = new[] { "Desktop Tools", "GTA V Modding", "Audio Plugins" },
    DailyStack = new[] { "C#", ".NET 10", "WPF / XAML", "Rust" },
    Currently = "KazanClothTool v1.14.0 + MexPlug VST3/CLAP",
    Motto = "Удобство > фичи. Один клик вместо десяти."
};
```

- Сейчас развиваю **KazanClothTool** — редактор одежды и текстур для GTA V: 35 тем, 3 языка, сборка под FiveM / Alt:V / Singleplayer
- Параллельно — **MexPlug**: VST3/CLAP плагин punchy auto-mix + analog liveliness на Rust, 0 аллокаций на аудио-потоке
- Люблю WPF, кастомные темы, Material Design Icons, CodeWalker, DSP
- Вся подробная дока — в Wiki проектов

## Projects

| Project | Stack | Ships for | Status | Link |
|---|---|---|---|---|
| **✂️ KazanClothTool** — редактор одежды и текстур для GTA V | C# · .NET 10 · WPF | FiveM · Alt:V · Singleplayer | ![ACTIVE](https://img.shields.io/badge/ACTIVE-2E4BFF?style=flat-square) | [Repo](https://github.com/Mextrim/KazanClothTool) · [Wiki](https://github.com/Mextrim/KazanClothTool/wiki) |
| **🎛️ MexPlug** — punchy auto-mix + analog liveliness | Rust · nice-plug · DSP | VST3 · CLAP | ![ACTIVE](https://img.shields.io/badge/ACTIVE-2E4BFF?style=flat-square) | [Repo](https://github.com/Mextrim/MexPlug) · [Releases](https://github.com/Mextrim/MexPlug/releases) |

> 🔔 **Notification · Latest Release:** [KazanClothTool **v1.14.0**](https://github.com/Mextrim/KazanClothTool/releases/download/v1.14.0/KazanClothTool-v1.14.0-win-x64.zip) — portable ZIP, установка не нужна. Интерактивная страница: [mextrim.github.io/KazanClothTool](https://mextrim.github.io/KazanClothTool/)

### KazanClothTool — детали

- 🖥️ Windows x64 · 🎨 35 тем · 🌍 RU / UA / EN без перезапуска
- 📦 Сборка: FiveM + `fxmanifest` · Alt:V + `resource.toml` · Singleplayer `dlc.rpf`
- 🧊 3D-просмотр через GTA V · 📦 `.kctproject`, автосейв каждые 60 сек

### MexPlug — детали

- 🦀 ~0.33 мкс/фрейм · 0 аллокаций на аудио-потоке · pluginval strict 5 — SUCCESS
- 🎚️ 19 ручек · 8 пресетов · DICE · A/B · 5 тем оформления
- 🖥️ FL / Ableton / Cubase / Reaper / Bitwig / Studio One

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#"/>
  <img src="https://img.shields.io/badge/.NET_10-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET"/>
  <img src="https://img.shields.io/badge/WPF-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="WPF"/>
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust"/>
  <img src="https://img.shields.io/badge/VST3-1DB954?style=for-the-badge&logoColor=white" alt="VST3"/>
  <img src="https://img.shields.io/badge/CLAP-F59E0B?style=for-the-badge&logoColor=white" alt="CLAP"/>
  <img src="https://img.shields.io/badge/GTA_V-000000?style=for-the-badge&logo=rockstargames&logoColor=white" alt="GTA"/>
  <img src="https://img.shields.io/badge/CodeWalker-FF6B00?style=for-the-badge&logo=unity&logoColor=white" alt="CodeWalker"/>
  <img src="https://img.shields.io/badge/FL_Studio-7ED321?style=for-the-badge&logoColor=white" alt="FL"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Actions"/>
</p>

<details>
<summary><b>🧰 Детальнее по инструментам</b></summary>
<br/>

- **Desktop:** C#, .NET 10, WPF, MVVM, XAML, Win32 API
- **Audio:** Rust, nice-plug, VST3 / CLAP, DSP (saturation, tape, glue-comp, limiter), pluginval strict 5
- **GTA / Modding:** CodeWalker, YTD / YDD / YFT, meta / fxmanifest / resource.toml, dlc.rpf
- **Deploy:** GitHub Actions, NSIS Setup.exe, portable ZIP, Releases + Wiki
- **UI/UX:** 35 кастомных тем, RU / UA / EN без перезапуска, Material Design Icons 7400+

</details>

## Statistics

<p align="center">
  <img src="https://streak-stats.demolab.com?user=Mextrim&theme=tokyonight&hide_border=true&background=0d1117" alt="streak"/>
</p>

**Languages — deals by repo** (KazanClothTool — C#, MexPlug — Rust):

```
C#    ████████████████████  ~90%  (KazanClothTool, .NET 10 / WPF)
Rust  ████                  ~8%   (MexPlug, VST3/CLAP DSP)
CSS   █                     ~1%   (Discord-light-theme, форк)
C++   █                     ~1%   (нативный код в KazanClothTool)
```

## Contact

### Связаться со мной:

<p align="center">
  <a href="https://t.me/mextrim"><img src="https://img.shields.io/badge/Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white" alt="telegram"/></a>
  <a href="https://vk.com/mextrim"><img src="https://img.shields.io/badge/VK-0077FF?style=for-the-badge&logo=vk&logoColor=white" alt="vk"/></a>
  <a href="https://discord.com/users/1393850947544944650"><img src="https://img.shields.io/badge/mexttv-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord"/></a>
</p>

---

<p align="center">© 2026 MeX · Profile UI inspired by DashStack · Icons: Font Awesome / Material</p>
