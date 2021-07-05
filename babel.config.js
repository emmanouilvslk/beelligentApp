module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./"],
                    extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
                    alias: {
                        scenes: "./src/scenes",
                        components: "./src/components",
                        atoms: "./src/components/atoms",
                        molecules: "./src/components/molecules",
                        organisms: "./src/components/organisms",
                        pages: "./src/components/pages",
                        helpers: "./src/helpers",
                        styles: "./src/styles",
                        models: "./src/models",
                        assets: "./src/assets",
                        controllers: "./src/controllers",
                        context: "./src/context",
                    },
                },
            ],
        ],
    };
};
