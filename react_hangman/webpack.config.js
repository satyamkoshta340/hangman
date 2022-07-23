// we have to tell broweser that exactly from where our application start
module.exports = {
    mode: "development",
    entry: "./app.js",
    watch: true,
    module: {
        rules: [{
            // this is a regex expression 
            test: /\.js/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-react']
            }
        },

        { 
            test: /\.s[ac]ss/,
            use: [ 'style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/,
            
        }
    ]
    }
}

