const HappyPack = require("happypack");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: `happypack/loader?id=ts`,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new HappyPack({
            id: "ts",
            threads: 2,
            use: [
                {
                    path: "ts-loader",
                    query: {
                        happyPackMode: true,
                    },
                },
            ],
        }),
    ],
};
