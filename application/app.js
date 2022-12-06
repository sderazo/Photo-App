const createError = require("http-errors");
const express = require("express");
const favicon = require('serve-favicon');
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const handlebars = require("express-handlebars");
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const flash = require('express-flash');

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");


const app = express();

app.engine(
  "hbs",
  handlebars({
    layoutsDir: path.join(__dirname, "views/layouts"), //where to look for layouts
    partialsDir: path.join(__dirname, "views/partials"), // where to look for partials
    extname: ".hbs", //expected file extension for handlebars files
    defaultLayout: "layout", //default layout for app, general template for all pages in app
    helpers: {
      nonEmptyObject: function(obj){
        return !(obj && obj.constructor === Object && Object.keys(obj).length == 0);
      },
      formatDate: function(dateString){
        return new Date(dateString).toLocaleString("en-US", {
          timeStyle: "long",
          dateStyle: "long"
        });
      }
    }, //adding new helpers to handlebars for extra functionality
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

var sessionStore = new MySQLStore({}, require('./conf/database'));

app.use(
    session({
        key: 'csid',
        secret: 'csc317 secret',
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
    })
);


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('csc317 secret'));
app.use(flash());

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(function(req,res,next){
  console.log(req.session);
  if(req.session.username){
    res.locals.isLoggedIn = true;
    res.locals.username = req.session.username;
  }
  next();
})

app.use("/", indexRouter); // route middleware from ./routes/index.js
app.use("/users", usersRouter); // route middleware from ./routes/users.js
app.use("/posts", postsRouter);


/**
 * Catch all route, if we get to here then the 
 * resource requested could not be found.
 */
app.use((req,res,next) => {
  next(createError(404, `The route ${req.method} : ${req.url} does not exist.`));
})
  

/**
 * Error Handler, used to render the error html file
 * with relevant error information.
 */
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
