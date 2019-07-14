module.exports = {
  webpack: (config, options, webpack) => {
    config.output = Object.assign({}, config.output, {
      filename: 'canvas.js',
      sourceMapFilename: 'canvas.map',
    });

    config.plugins.push(new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }));

    config.devtool = false;

    return config;
  },
};