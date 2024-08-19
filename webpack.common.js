module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                } 
            }
        ]
    }
}