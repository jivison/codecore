const knex = require("./db/client");


knex('posts')
    .where('id', '23')
    .update({
        title: "I'm stuff",
        content: "oh no"
    })
    .then((data) => {
        console.log(data);
        knex.destroy()
    })