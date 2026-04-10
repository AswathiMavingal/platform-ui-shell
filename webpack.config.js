const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: 'http://localhost:3000/remoteEntry.js',
    products: "products@http://localhost:4201/remoteEntry.js",
    orders: "orders@http://localhost:4202/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
