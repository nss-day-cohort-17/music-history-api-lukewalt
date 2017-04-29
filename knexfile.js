// This file was generated by
// $ knex init
// Created ./knexfile.js

// Updated with our config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'musichistory'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },


  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
