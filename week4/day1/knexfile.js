// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "knex_demo",
            username: "john",
            password: "password"
		},
		migrations : {
			tableName: "migrations",
			directory: "db"
		}
    }
};
