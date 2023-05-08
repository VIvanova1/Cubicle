const config = {
    production: {
        PORT: 1000,
    },
    development: {
        PORT: 5000,
    }
};

module.exports = config[process.env.node_env || 'development'];