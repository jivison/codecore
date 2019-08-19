// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "knex_labs",
            username: "john",
            password: "password"
        },
        migrations: {
            tableName: "migrations",
            directory: "db"
        }
    }
};
