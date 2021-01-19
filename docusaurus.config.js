module.exports = {
  title: 'LeetCode Trip',
  tagline: 'LeetCode trip of Yancey.',
  url: 'https://leetcode.yanceyleo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Yancey Inc.',
  projectName: 'leetcode-trip',
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leetcode',
        path: 'leetcode-docs',
        editUrl:
          'https://github.com/YanceyOfficial/leetcode-trip/edit/master/website/',
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
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
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
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        routeBasePath: 'data-structure',
        sidebarPath: require.resolve('./sidebarsDataStructure.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'LeetCode Trip',
      logo: {
        alt: 'LeetCode Trip Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/leetcode/twoSums',
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
          to: '/data-structure/stack',
          label: 'Data Structure',
          position: 'left',
          activeBaseRegex: '/data-structure/',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Yancey Inc. and its affiliates.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
