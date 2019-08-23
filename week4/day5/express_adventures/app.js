const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const rootRouter = require("./routes/root");
const articleRouter = require("./routes/articles");

const app = express();

function getUsernameMiddleware(request, response, next) {
    response.locals.username = request.cookies.username;
    next();
}

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(getUsernameMiddleware);
app.use(
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);  

// Routers
app.use(rootRouter);
app.use("/articles", articleRouter);

app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.use(function(req, res, next) {
    const url = req.url;

    if (url === "/contact_us") {
        // check to see if user is logged in
        if (res.locals.username) {
            next(); // if the user is logged in then they can visit /contact_us
        } else {
            res.redirect("/"); //otherwise they get redirected to the root path
        }
    }
    next();
});

app.set("view engine", "jade"); // here we are telling express to render tempaltes using ejs

const PORT = 6060;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Express Server started on ${ADDRESS}:${PORT}`);
});
