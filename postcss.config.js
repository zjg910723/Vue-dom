module.exports = {
    plugins: [
        require('precss')(),
        require("postcss-cssnext")({
            features: {
                rem: false
                    // customProperties: {
                    //     variables: require("./varibles.js")
                    // }
            }
        }),
        require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
        })

    ]
}