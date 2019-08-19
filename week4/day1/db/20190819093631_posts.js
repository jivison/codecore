exports.up = function(knex) {
    return knex.schema.createTable("posts", table => {
        // Create a column called id with the data type of bigserial
        table.bigIncrements("id");
        table.string("title");
        table.text("content");
        table.timestamp("created_at").default(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts");
};
