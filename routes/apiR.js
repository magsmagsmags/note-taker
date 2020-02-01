//////////////////////////////////////////////
// dependencies
//////////////////////////////////////////////
const router = require("express").Router();
const store = require("../db/store");

//////////////////////////////////////////////
// browser's path
// gets information from database
//////////////////////////////////////////////

router.get("/notes", function (req, res) {
    // calling to your store of dependencies above
    console.log('apiR get /notes called')
    store
        //from the dependency we are getting Notes
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});
router.post("/notes", function (req, res) {
    store
        .addNotes(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});
router.delete("/notes/:id", function (req, res) {
    store
        .delNotes(req.params.id)
        .then(() => res.json({
            ok: true
        }))
        .catch(err => res.status(500).json(err));
});
module.exports = router;