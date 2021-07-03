/**
 * Copyright (c) Yancey, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
        sidebarPath: require.resolve('./sidebarsLeetcode.js'),
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
        sidebarPath: require.resolve('./sidebarsAlgorithmDesign.js'),
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
        sidebarPath: require.resolve('./sidebarsDataStructure.js'),
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
    googleAnalytics: {
      trackingID: 'UA-193598199-1',
      anonymizeIP: true,
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
          to: '/algorithm-design/backtrack',
          label: 'Algorithm Design',
          position: 'left',
          activeBaseRegex: '/algorithm-design/',
        },
        {
          to: '/data-structure/stack/stack',
          label: 'Data Structure',
          position: 'left',
          activeBaseRegex: '/data-structure/',
        },
        {
          href: 'https://yanceyleo.com',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/YanceyOfficial/natsuha-weather',
          label: 'Natsuha Weather',
          position: 'right',
          className: 'natsuha-weather',
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      },
    ],
  ],
}
