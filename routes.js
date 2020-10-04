const express = require('express')
const routes = express.Router()
const teachers = require('./controllers/teachers')

routes
    .get("/", function (req, res) {
        return res.redirect("/teachers/2")
    })

    .get("/teachers/", function (req, res) {
        return res.render("./teachers/index")
    })

    .get("/teachers/create", function (req, res) {
        return res.render("./teachers/create")
    })

    .post("/teachers/", teachers.post)

    .get("/teachers/:id", teachers.show)

    .get("/teachers/:id/edit", teachers.edit)

    .put("/teachers", teachers.put)

    .delete("/teachers", teachers.delete)

    .get("/studants", function (req, res) {

        return res.render("./studants/studants")
    })

// routes.use(function (req, res) {
//     res.status(404).render("not-found");
// });

module.exports = routes