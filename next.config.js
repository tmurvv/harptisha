const withCSS = require('@zeit/next-css')
module.exports = withCSS({cssModules: false});
module.exports = {
    env: {
        STRIPE_PUBLISHABLE_KEY: "pk_test_51H8sxyDhvslWjvSBFfpC1cYhtNQPohoFP9ozVTxgKh7kLCjQsImSvkZBl8XWrtJ9mLatyz4DML18sOEXMobpoq4100OPnmSX1Z"
    }
};