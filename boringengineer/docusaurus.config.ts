import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Custom Fields are provided to your site via `useDocusaurusContext`
// ASSETS_BASE is used to point to the assets server for images and other static content
const ASSETS_BASE = process.env.ASSETS_BASE ?? "https://siteassets.auxon.in";

const config: Config = {
  title: 'Boring Engineer',
  tagline: 'Personal site of Navin Subramani, where Navin blogs and shares his experiences in engineering, tech, and life.',
  favicon: 'img/boring-engineer-favicon.ico',

  // Put you own values here (NOT a top level "confgig")
  customFields: {
    ASSETS_BASE,
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://boringengineer.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'navinsubramani', // Usually your GitHub org/user name.
  projectName: 'boringengineer-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/navinsubramani/boringengineer-site/tree/main/boringengineer',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/navinsubramani/boringengineer-site/tree/main/boringengineer',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // Show all posts in sidebar
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/boring-engineer-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // (optional) disables the theme toggle button
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '', // logo is a title as well, so we can leave this empty
      logo: {
        alt: 'Boring Engineer',
        src: 'img/boringengineer_design_1_dark.png',
      },
      items: [
        {to: '/blog', label: 'Read-My-Blogs', position: 'left'},
        {
          type: 'docSidebar',
          position: 'left',
          label: 'Do-It-Yourself',
        },
        {
          href: 'https://github.com/navinsubramani',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/navin-subramani-92b18378/',
          label: 'LinkedIn',
          position: 'right',
        },
      ]
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Linkedin',
      //         href: 'https://www.linkedin.com/in/navin-subramani-92b18378/',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'DIY',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Boring Engineer. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

};

export default config;