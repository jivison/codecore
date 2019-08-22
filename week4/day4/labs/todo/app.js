const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.locals.todos = req.cookies.todos;
    next();
});
app.use(morgan("dev"));

app.set("view engine", "ejs");

const cookieMaxAge = 1000 * 60 * 60 * 24 * 7;

app.get("/", (req, res) => {
    res.render("homepage", { todos: req.cookies.todos });
});

app.get("/create_todo", (req, res) => {
    res.render("createTodo");
});

app.post("/todo_created", (req, res) => {
    res.cookie(
        "todos",
        (res.locals.todos) ? res.locals.todos.concat(
            [{ body: req.body.body, title: req.body.title }]
        ) : [{ body: req.body.body, title: req.body.title }],
        { maxAge: new Date() }
    );
    res.redirect("/");
});

const PORT = 4545;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Express server started on ${ADDRESS} and ${PORT}`);
});
