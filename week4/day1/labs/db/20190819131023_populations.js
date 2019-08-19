exports.up = function(knex) {
    return knex.schema.createTable("populations", table => {
        table.bigIncrements("id");
        table.integer("year");
        table.bigInteger("quantity");
        table.integer("country_id")
        table.foreign("country_id").references("countries.id");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("populations");
};
