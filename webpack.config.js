module.exports = {
    mode: "development",
    entry : {
        ajax: './public/ajax.js',
        user: './public/user.js',
    },
    output: {
        filename: './[name].bundle.js'
    },
    module: {
        rules: [
            {
                test : /\.css$/,
                exclude: /node_modules/,
                use : 'style-loader!css-loader'

            },
            {
                test : /\.less$/,
                exclude: /node_modules/,
                use : 'style-loader!css-loader!less-loader'

            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]

    }
};