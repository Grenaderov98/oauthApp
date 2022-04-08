module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'sergejgrenaderov',
      password: 'test_password',
      database: 'oauthAppDB',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  }
};
