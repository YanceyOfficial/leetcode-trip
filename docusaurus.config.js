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
        id: 'community',
        path: 'community',
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
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
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },

        {
          to: 'leetcode/',
          activeBasePath: 'leetcode',
          label: 'LeetCode',
          position: 'left',
        },
        {
          to: 'algorithm-design/',
          activeBasePath: 'algorithm-design',
          label: 'Algorithm Design',
          position: 'left',
        },
        {
          to: 'data-structure/',
          activeBasePath: 'data-structure',
          label: 'Data Structure',
          position: 'left',
        },
        {
          to: 'search-sort/',
          activeBasePath: 'search-sort',
          label: 'Search & Sort',
          position: 'left',
        },
        {
          to: '/community/twoSums',
          label: 'Community',
          position: 'left',
          activeBaseRegex: '/community/',
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
