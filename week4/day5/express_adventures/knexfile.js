// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "express_adventures",
            username: "john",
            password: "password"
        },
        migrations: {
            directory: "db/migrations/"
        },
        seeds: {
            directory: "db/seeds/"
        }
    }
};
