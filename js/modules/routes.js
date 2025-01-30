/*----------
GET Requests
----------*/

//handle root
const index = (req, res) => {
    res.render("index.ejs");
};

//handle aboutMe
const aboutMe = (req, res) => {
    res.render("aboutMe.ejs");
};

//handle projects
const projects = (req, res) => {
    res.render("projects.ejs");
};

/*-----------
POST Requests
-----------*/

//handle post requests here

module.exports = {
    index,
    aboutMe,
    projects
};