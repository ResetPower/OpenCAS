import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OpenCAS",
  description: "An Open-Source Computer Algebra System",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documents", link: "/what-is-opencas" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is OpenCAS?", link: "/what-is-opencas" },
          { text: "Quickstart", link: "/quickstart" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ResetPower/OpenCAS" },
    ],
  },
});
