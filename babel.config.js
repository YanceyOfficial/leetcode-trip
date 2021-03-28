module.exports = {
  presets: [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
    require.resolve('@docusaurus/core/lib/babel/preset'),
    '@babel/preset-typescript',
  ],
}
