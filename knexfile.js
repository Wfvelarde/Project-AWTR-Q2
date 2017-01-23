module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/awtr_library'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
