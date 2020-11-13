module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['babel-plugin-styled-components']
};
