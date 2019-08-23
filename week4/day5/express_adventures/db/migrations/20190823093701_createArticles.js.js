exports.up = function(knex) {
    return knex.schema.createTable("articles", t => {
        t.bigIncrements("id");
        t.string("title");
        t.string("username");
        t.text("content");
        t.integer("viewCount");
        t.timestamp("createdAt").default(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("articles");
};
