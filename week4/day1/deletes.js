const knex = require("./db/client");

knex('posts').where('id', 23).del().then((data) => {
    console.log(data);
    knex.destroy();
})