exports.up = function(knex) {
    return knex.schema.alterTable("posts", table => {
        table.text("image_url");
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("posts", table => {
        table.dropColumn("image_url");
    });
};
