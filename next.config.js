module.exports = {
    /* Uncomment for static builds
    output: "export",
    images: {
        unoptimized: true,
    },
    */
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ["raw-loader"],
        });
        return config;
    },
};
