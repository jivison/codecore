const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get("/", (req, res) => {
    knex("articles")
        .select("*")
        .then(data => {
            res.render("articles/index", {
                articles: data
            });
        });
});

router.get("/new", (req, res) => {
    res.render("articles/new");
});

router.get("/:id", (req, res) => {
    knex("articles")
        .select("*")
        .where({ id: req.params.id })
        .then(data => {
            res.render("articles/show", {
                article: data[0]
            });
        })
        .catch(err => {
            res.send("Article not found.");
        });
});

router.post("/", (req, res) => {
    const articlesParam = {
        title: req.body.title,
        content: req.body.content,
        username: res.locals.username,
        viewCount: 0
    };

    knex("articles")
        .insert(articlesParam)
        .returning("*")
        .then(data => {
            res.redirect("/articles");
        });
});

router.delete("/:id", (req, res) => {
    knex("articles")
        .where({ id: req.params.id })
        .delete()
        .then(data => {
            res.redirect("/articles");
        });
});

router.get("/:id/edit", (req, res) => {
    knex("articles")
        .select("*")
        .where({ id: req.params.id })
        .then(data => {
            res.render("articles/edit", {
                article: data[0]
            });
        })
        .catch(err => {
            res.send("Article not found.");
        });
});

router.patch("/:id", (req, res) => {
    const articleParams = {
        title: req.body.title,
        content: req.body.content
    };

    knex("articles")
        .where({ id: req.params.id })
        .update(articleParams)
        .returning("id")
        .then(data => {
            res.redirect(`/articles/${data[0]}`);
        });
});

module.exports = router;
