import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '启梦主题文档站',
  tagline: '助力每一个梦想',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://qm.1v.fit',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xiaoman1221', // Usually your GitHub org/user name.
  projectName: 'qimeng_doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
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
            'https://github.com/xiaoman1221/qimeng_doc/blob/master/',
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
            'https://github.com/xiaoman1221/qimeng_doc/blob/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      contextualSearch: true,
      appId: 'C6O8YD97EF',
      apiKey: '4f11b644b1c6d5983cccc1b6e5d8d06e',
      indexName: '启梦主题文档站 ',
    },
    navbar: {
      title: '启梦主题文档站',
      logo: {
        alt: 'LGOG',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: 'https://www.qiimeng.com/', label: '官方网站', position: 'left'},
        {to: 'https://dildil.icu/', label: '官方演示站', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://qm.qq.com/q/yuk1A0RncA',
          label: 'QQ群',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '安装',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '关于我们',
          items: [
            {
              label: '官方网站(建设中)',
              href: 'https://www.qiimeng.com/',
            },
            {
              label: 'QQ群(内测群)',
              href: 'https://qm.qq.com/q/OWGdraSf84',
            },
            {
              label: '滥用举报(建设中)',
              href: 'https://www.qiimeng.com/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '论坛',
              to: 'https://www.qiimeng.com/bbs',
            },
            {
              label: '云电工作室',
              href: 'https://bbs.ce-studio.cn/',
            },
            {
              label: "莫尔豪斯工作室",
              href: 'https://www.morehouse-s.com/about/',
            }
          ],
        },
      ],
      copyright: `Copyright © 2025 -  ${new Date().getFullYear()} 启梦主题, <a href="https://beian.miit.gov.cn/">蒙ICP备2022000574号-11</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
