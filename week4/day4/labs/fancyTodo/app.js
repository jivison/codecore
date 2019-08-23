const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const storeTodo = require("./helpers/storeTodo");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    // if (req.cookies.todos) {
    res.locals.todos = req.cookies.todos;
    // } else {
    // res.locals.todos = [];
    // }
    res.locals.username = req.cookies.username;
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

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/todo_created", (req, res) => {
    res.cookie(
        "todos",
        storeTodo({ body: req.body.body, title: req.body.title }, res, req),
        { maxAge: new Date() }
    );

    res.redirect("/");
});

app.post("/sign_in", (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect("/");
});

app.post("/sign_out", (req, res) => {
    res.clearCookie("username");
    res.redirect("/");
});

const PORT = 4545;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Express server started on ${ADDRESS} and ${PORT}`);
});
