import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
/* eslint-disable perfectionist/sort-objects -- Disabling sorting to maintain logical grouping of plugin hooks */
export default defineConfig({
  title: "TailorDS - Tailored Design System Framework",
  description:
    "TailorDS is a tool to build your own SCSS framework, empowering you to create, manage, and implement a Design System tailored to your project's needs.",
  base: "/tailords/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: "/", text: "Home" },
      { link: "/markdown-examples", text: "Examples" },
    ],

    sidebar: [
      {
        items: [
          { link: "/markdown-examples", text: "Markdown Examples" },
          { link: "/api-examples", text: "Runtime API Examples" },
        ],
        text: "Examples",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
/* eslint-enable perfectionist/sort-objects */
