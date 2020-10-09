var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'srcjs', 'aceEditor.jsx'),
    output: {
        path: path.join(__dirname, 'inst', 'www', '${package}', 'aceEditor'),
        path: path.join(__dirname, 'inst/htmlwidgets'),
        filename: 'aceEditor.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
        test: /ace-builds.*\/worker-.*$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'x-0.0.0/[name].[hash:8].[ext]',
        }
      }
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
