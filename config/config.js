var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'facturacion'
    },
    port: 3000,
    db: 'mysql://localhost/clase'
  },

  test: {
    root: rootPath,
    app: {
      name: 'facturacion'
    },
    port: 3000,
    db: 'mysql://localhost/facturacion-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'facturacion'
    },
    port: 3000,
    db: 'mysql://localhost/facturacion-production'
  }
};

module.exports = config[env];
