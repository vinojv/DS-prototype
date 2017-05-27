const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config.js');

const host = (process.env.HOST || 'localhost');
const port = (process.env.PORT) || 8080;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
//    stats: {colors: true},
    hotOnly: true,
    noInfo: false,
    stats: 'minimal',
    inline: true,
    overlay: {
        warnings: false,
        errors: true,
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },
    proxy: {
        '/websocket/*': "http://localhost:8080",
        '/rest/*': "http://localhost:8080",
    },

}).listen(port, "0.0.0.0", function (err) {
    if (err)
        console.log(err);
    console.log(`Listening at localhost:${port}`);
});
