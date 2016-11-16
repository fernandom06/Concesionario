var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'proyectocoches'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyectocoches-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'proyectocoches'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyectocoches-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'proyectocoches'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyectocoches-production'
  }
};

module.exports = config[env];
