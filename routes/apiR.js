//////////////////////////////////////////////////////////////////
// dependencies
//////////////////////////////////////////////////////////////////
const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs");
const db = require("../db/db.json");

//////////////////////////////////////////////////////////////////
// "get" / 'SELECT' / READ
//////////////////////////////////////////////////////////////////
router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//////////////////////////////////////////////////////////////////
// "post" / 'INSERT INTO' / CREATE
//////////////////////////////////////////////////////////////////
router.post("/notes", function (req, res) {
    store
        .saveNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));

});

//////////////////////////////////////////////////////////////////
// "delete" / 'DELETE FROM' / DELETE
//////////////////////////////////////////////////////////////////
router.delete("/notes/:id", function (req, res) {
    store
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

//////////////////////////////////////////////////////////////////
//export the module
//////////////////////////////////////////////////////////////////
module.exports = router;