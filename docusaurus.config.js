// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vcard4',
  tagline: 'A vCard version 4.0 generator and parser',
  url: 'https://kelseykm.github.io',
  baseUrl: '/vcard4/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kelseykm', // Usually your GitHub org/user name.
  projectName: 'vcard4', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      announcementBar: {
        content: 'If you like vcard4, give us a ★ on <a href="https://github.com/kelseykm/vcard4">GitHub</a>',
      },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: '/img/logo.webp',
          srcDark: '/img/logo-dark.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/tutorial/intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'documentation/intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/kelseykm/vcard4',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} <a href="mailto:kelseykm.git@gmail.com">Kelsey Mwongeli</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
