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

### Importing TailorDS to compile with SASS

By default, the SASS compiler doesn't automatically search in node_modules for imports. You need to write the node_modules path in your SCSS file.

```scss
@use "node_modules/tailords/scss/tailords" as *;
```

You need to configure your build script to include TailorDS files. There are two ways to do this:

#### Option 1: Using `load-path`

Configure your SCSS build script to include TailorDS files via the `--load-path` flag. Update your `package.json`:

```json
{
  "scripts": {
    "scss": "sass --load-path=node_modules/tailords/scss"
  }
}
```

Import TailorDS into your SCSS file:

```scss
@use "tailords" as *;
```

#### Option 2: Using `pkg:` URL

Configure your SCSS build script to enable the `pkg:` URL scheme. Update your `package.json`:

```json
{
  "scripts": {
    "scss": "sass --pkg-importer=node"
  }
}
```

Import TailorDS using the `pkg:` prefix:

```scss
@use "pkg:tailords" as *;
```

## 🛠️ Usage

The recommended way to integrate TailorDS is by creating a dedicated SCSS partial file for configuration. This file will import TailorDS and define your custom settings.

### 1. Create a configuration file

Create a partial file (e.g., \_tailor-config.scss) inside your styles folder.

```scss
// _tailorDS.scss

// Import TailorDS
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

// Override default variables if needed
$primary-color: #3498db; // Change the primary color
$font-size-base: 16px; // Adjust the base font size

// Enable or disable helper class generation
$generate-spacing-helpers: true;
$generate-color-helpers: false;

// Define custom configurations
$custom-breakpoints: (
  "small": 480px,
  "medium": 768px,
  "large": 1024px,
);
```

Refer to the [Documentation]() for detailed examples and advanced usage.

### 2. Use a centralized variables file

It’s considered a best practice to have a centralized SCSS file in your project that exposes all your variables, functions, mixins, and third party settings. This file should not generate or include CSS directly.

#### Why?

1. **Avoid duplication**: If you import this file in multiple SCSS files, it won’t generate redundant CSS.
1. **Reusable in component-based projects**: In Vue or React projects, this allows you to access variables, functions, and mixins without importing the file in every single component.
1. **Cleaner structure**: Keeps your CSS and configuration separate.

Include TailorDS and your custom configuration in your centralized variables file.

```scss
// _variables.scss

// Import configured TailorDS
@use "path/to/_tailorDS" as tds;

// Expose your variables, mixins, and functions
$primary-color: tds.$primary-color;
$font-size-base: tds.$font-size-base;

@function my-mixin {
  @return tds.my-mixin;
}
```

### 3. Import the Configuration File

In your main SCSS file (e.g., styles.scss), include your configuration file:

```scss
// styles.scss

// Import centralized TailorDS configuration
@use "path/to/_variables" as *;

// Use the variables and mixins
body {
  font-family: $font-family-sans;
  background-color: $primary-color;
}
```

### 4. Configure with Webpack o Vite

If you're using Webpack or Vite, you can configure them to automatically include TailorDS and your settings in every SCSS file. This is especially useful in projects like Vue or React, where importing TailorDS in each component would be cumbersome.

#### Vite Configuration

Modify your vite.config.js file:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "path/to/_variables" as *;`,
      },
    },
  },
});
```

#### Webpack

Use the Webpack configuration file to import TailorDS as global styles:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@use "path/to/_variables" as *;`,
            },
          },
        ],
      },
    ],
  },
};
```

## 🔄 Notes About `@use` vs `@import`

With the introduction of the `@use` directive, Sass has significantly changed how variables, functions, and mixins _(known as members in Sass)_ are scoped and accessed. Here’s an overview of the key differences and their implications:

### Scoped Members vs Global Scope

Previously, with `@import`, you could define a variable, function, or mixin in one file and use it anywhere, as long as the file had been imported earlier in the project.

Now, with `@use`, each file must explicitly import the dependencies it uses. This means you must import a file in every place where its members are needed, ensuring a more modular and explicit structure.

> **Note**: Files are imported only once, no matter how many times they are referenced in your project, improving efficiency.

```scss
// main.scss
@use 'tailords';
@use 'typography';

...

// typography.scss
@use 'tailords';

...
```

### Namespacing

By default, all imported members are namespaced, reducing the risk of name collisions. This ensures:

- **Avoiding Global Scope Conflicts**: Namespacing prevents accidental overwrites of common member names.
- **Clear Dependency Management**: Each file explicitly manages its own imports.
- **No Unintended Side Effects**: Imported members are only available in the file where they are explicitly used.
- **Modular and Maintainable Code**: Dependencies are clearly defined and organized.
- **Scalability for Large Projects**: Namespaced members make the codebase easier to navigate and extend.

For example:

```scss
@use "colors";

.button {
  background-color: colors.$primary-color;
}
```

You can also import members without a namespace by using the `as *` syntax. However, this approach is less recommended as it introduces the risk of global conflicts:

```scss
@use "colors" as *;

.button {
  background-color: $primary-color;
}
```

### Using TailorDS with Namespaces

If you want to import TailorDS with a namespace, we recommend using a short alias like `tds` for clarity and efficiency:

```scss
@use "tailords" as tds;

.button {
  background-color: tds.$primary-color;
}
```

This approach reflects the precision and control that TailorDS embodies, ensuring your project is modular, scalable, and easy to maintain.

## 🗺️ Roadmap

- [ ] Add a configuration generator tool.
- [ ] Expand advanced documentation.
- [ ] Introduce live preview features for rapid prototyping.

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
