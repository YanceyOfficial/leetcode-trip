// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'LeetCode Trip',
  tagline: 'LeetCode Trip',
  url: 'https://algorithm.yanceyleo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Yancey Inc.',
  projectName: 'leetcode-trip',
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leetcode',
        path: 'leetcode-docs',
        editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        routeBasePath: 'leetcode',
        sidebarPath: require.resolve('./sidebars/sidebarsLeetcode.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algorithm-design',
        path: 'algorithm-design-docs',
        editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        routeBasePath: 'algorithm-design',
        sidebarPath: require.resolve('./sidebars/sidebarsAlgorithmDesign.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'data-structure',
        path: 'data-structure-docs',
        editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        routeBasePath: 'data-structure',
        sidebarPath: require.resolve('./sidebars/sidebarsDataStructure.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
      },
    ],
  ],
  themeConfig: {
    prism: {
      // eslint-disable-next-line global-require
      theme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['rust'],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'referral-traffic',
      content:
        '⭐️ Want more technical articles? Please visit my <a target="_blank" rel="noopener noreferrer" href="https://yanceyleo.com">official website</a>! ⭐️',
    },
    algolia: {
      apiKey: '428e3094afa3248dffafdbd793d4ea9d',
      appId: 'UCJRNXXMOH',
      indexName: 'leetcode-trip',
    },
    navbar: {
      title: 'LeetCode Trip',
      logo: {
        alt: 'LeetCode Trip Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/leetcode/easy/1-two-sum',
          label: 'LeetCode',
          position: 'left',
          activeBaseRegex: '/leetcode/',
        },
        {
          to: '/algorithm-design/backtracking',
          label: 'Algorithm Design',
          position: 'left',
          activeBaseRegex: '/algorithm-design/',
        },
        {
          to: '/data-structure/stack',
          label: 'Data Structure',
          position: 'left',
          activeBaseRegex: '/data-structure/',
        },
        {
          href: 'https://yanceyleo.com',
          label: 'Official Blog',
          position: 'right',
        },
        {
          href: 'https://js.yanceyleo.com',
          label: 'JavaScript APIs',
          position: 'right',
        },
        {
          href: 'https://github.com/YanceyOfficial/leetcode-trip',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      copyright: `<a href="https://yanceyleo.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Copyright © ${new Date().getFullYear()} Yancey Inc. and its affiliates.</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebars'),
          editUrl:
            'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-193598199-1',
          anonymizeIP: true,
        },
      },
    ],
  ],
}
