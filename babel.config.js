const config = {
  presets: ['react-app'],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
      },
    ],
  ],
};

module.exports = config;
