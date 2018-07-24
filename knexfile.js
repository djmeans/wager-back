module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/wager"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
