module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/awtl_library'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
