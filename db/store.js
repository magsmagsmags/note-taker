const fs = require("fs");
const util = require("util");

//fixes probs will async calls to api and reading files
const readFileA = util.promisify(fs.readFile)
const writeFileA = util.promisify(fs.writeFile)


//store is a specislized parent function. holds all the children inside it 
class Store {
    constructor() {
        this.lastId = 0;
    }
    //////// all of these have return statements. 
    /// read and write funcions hav eonly one line inside of them. 
    // Just return (readfileA, writefileA)
    // read returns files from bd.json
    ///// functions only return one thing (???????) - maybe

    read() {
        ///////// utfa formats the read
        return readFileA("/db.json", JSON.stringify(note));
    }
    //this function is expecting something to be passed via note
    write(note) {
        return writeFileA("/db.json", "utf8");
        /////
    }
    /////   * GET `/api/notes` 
    //Should read the `db.json` file and return all saved notes as JSON.
    getNotes() {
        /////   * GET `/api/notes` 
        //Should read the `db.json` file and return all saved notes as JSON.
        this.read()
            .then(notes => {
                let parseNotes;
                try {
                    parseNotes = [].concat(JSON.parse(notes));
                } catch (err) {
                    parseNotes = [];
                }
                return parseNotes;
            });
    }

    addNotes(note) {
        //  * POST `/api/notes` 
        // - Should recieve a new note to save on the request body, add it to the `db.json` file, 


        // and then return the new note to the client

    }
    deleteNotes(id) {

        //   * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. 
        //  This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

    }



}

module.exports = new Store();