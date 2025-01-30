//to install required modules in the terminal: type "npm i express express-session ejs jsonwebtoken sqlite3 connect-sqlite3 socket.io path"

//import external modules
const express = require("express");
const session = require("express-session");
const path = require("path");

//import custom modules
const routes = require("./modules/routes.js")

/*-----------
Server Config
-----------*/

const app = express(); //initialize express, set as the "app" object
const port = process.env.PORT || 3000; //set the port number

//initialize the server, set the port number, and start listening for requests
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});

//initiaize session, set as the "session_MIDDLEWARE" object
const session_MIDDLEWARE = session({
    //store: new SQLiteStore,
    secret: "key_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});

app.set("view engine", "ejs"); //set ejs as the view engine
app.set("views", path.join(__dirname, "../views")); //configure "views" directory to be the default for views
app.set("css", path.join(__dirname, "/css")); //configure "css" directory to be the default for stylings

app.use(session_MIDDLEWARE); //configure the server to use middleware
app.use(express.urlencoded({ extended: true })); //encode url
app.use(express.static(path.join(__dirname, "../public"))); //configure the static "public" directory to be the default for requests

//configure the server to use routes from the routes.js module
app.get("/", routes.index);
app.get("/aboutMe", routes.aboutMe);
app.get("/projects", routes.projects);