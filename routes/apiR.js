const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", function (req, res) {
    store.getnotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
})

router.post("/notes", function (req, res) {
    store.getnotes(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
})

router.delete("/notes", function (req, res) {
    store.getnotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
})