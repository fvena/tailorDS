<!-- PROJECT HEADER -->
<br />

<p align="right">
  ⭐ &nbsp;&nbsp;<strong>to the project if you like it</strong> ↗️:
</p>

<p align="center">
  <a href="">
    <!--
    Add your logo or a banner image
    This helps grab attention, looks professional, and shows you care about the details.
    Optimal dimensions for your header image are 1280x650px.
    -->
    <!--
    Check social media preview
    You can also use it as a social media preview on GitHub: https://docs.github.com/en/github/administering-a-repository/customizing-your-repositorys-social-media-preview.
    -->
  </a>
</p>

<h2 align="center">
  TailorDS
  <div style="font-size: 16px">Tailored Design System Framework</div>
</h2>
<p align="center">TailorDS is a tool to build your own SCSS framework, empowering you to create, manage, and implement a Design System tailored to your project's needs.</p>

<br/>

<div align="center">

[![SemVer](https://img.shields.io/npm/v/tailords)]()
![npm bundle size](https://img.shields.io/bundlephobia/min/tailords)
![Build Status](https://github.com/fvena/tailords/workflows/CI%2FCD/badge.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
[![Live Demo](https://img.shields.io/badge/demo-online-success.svg)](https://#)
[![Live Docs](https://img.shields.io/badge/docs-online-success.svg)](https://#)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcarbon.now.sh)](https://#)

</div>

<p align="center">
  <a href="#"><strong>Documentation »</strong></a>
  <br />
  <br />
  <a href="#getting-started">Getting Started</a>
  ·
  <a href="#">Demo</a>
  ·
  <a href="https://github.com/fvena/tailords/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  ·
  <a href="https://github.com/fvena/tailords/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>

<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li><a href="#-motivation">Motivation</a></li>
    <li><a href="#-features">Features</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-usage">Usage</a></li>
    <li><a href="#-roadmap">Roadmap</a></li>
    <li><a href="#-contributing">Contributions</a></li>
    <li><a href="#-license">License</a></li>
  </ol>
</details>

## 💡 Motivation / About the project

TailorDS is the tool that lets you create a framework SCSS as unique as your Design System, crafted with the precision and care of a bespoke suit, ensuring every detail fits perfectly. Leave behind cookie-cutter solutions and bring unique projects to life, where every line counts, and nothing is wasted.

With TailorDS, the power is yours: develop a framework that adapts to you and your design, not the other way around. Because only with full control over your tools can you create projects that are truly exclusive and of the highest quality.

Your framework, your rules.

## ✨ Features

- **Tailored Framework**: Build a framework perfectly aligned with your Design System.
- **Lightweight**: Generate only the styles you need—no unnecessary code.
- **Customizable**: Define colors, typography, spacing, and responsive breakpoints.
- **Modern Tools**: Leverages the latest SCSS features.
- **Full Control**: Develop frameworks that reflect your unique workflow and style.

## 🚀 Getting Started

### Installation

```sh
npm install tailords
```

## 🧑‍💻 Usage

TailorDS is highly customizable. Here’s a basic example to get started:

```scss
@use "tailords" with (
  $colors: (
    primary: #3498db,
    secondary: #2ecc71,
  ),
  $spacing: (
    small: 4px,
    medium: 8px,
    large: 16px,
  )
);

@include tailords.helpers();
```

Refer to the [Documentation]() for detailed examples and advanced usage.

## 🗺️ Roadmap

- [] Add a configuration generator tool.
- [] Expand advanced documentation.
- [] Introduce live preview features for rapid prototyping.

## 🤝 Contributions

We welcome contributions! Here's how you can get involved:

1. Fork the repository.
1. Create a feature branch: `git checkout -b feature/<your-feature>`.
1. Commit your changes: `git commit -m "feat: Add your feature"`.
1. Push to the branch: `git push origin feature/<your-feature>`.
1. Open a pull request.

Read our [CONTRIBUTING.md]() for more details.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙌 Acknowledgements

- Tools or libraries you used (e.g., shields.io, React).
- Inspiration sources or contributors.

<p align="center"> <strong>Thank you for using TailorDS!</strong> <br /> <em>Made with ❤️ for front-end artisans</em></p>
