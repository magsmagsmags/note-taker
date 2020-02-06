
//////////////////////////////////////////////////////////////////
// dependencies
//////////////////////////////////////////////////////////////////
const fs = require("fs");
const util = require("util");
const readFileA = util.promisify(fs.readFile);
const writeFileA = util.promisify(fs.writeFile);


class Store {
    constructor() {
        this.lastId = 0;

        const data = fs.readFileSync("./db.json", { encoding: "utf8" });
        if (data.length > 0) {
            let currentNotes = JSON.parse(data);
            for (let i = 0; i < currentNotes.length; i++) {
                const note = currentNotes[i];
                if (this.lastId < note.id) {
                    this.lastId = note.id;
                }
            }
        }
    }
    //////////////////////////////////////////////////////////////////
    // read() function
    //////////////////////////////////////////////////////////////////
    read() {
        return readFileA("./db.json", "utf8");
    }
    //////////////////////////////////////////////////////////////////
    // write() function
    //////////////////////////////////////////////////////////////////
    write(note) {
        return writeFileA("./db.json", JSON.stringify(note));
    }
    //////////////////////////////////////////////////////////////////
    // getNotes() function
    //////////////////////////////////////////////////////////////////
    getNotes() {
        return this.read()
            .then(notes => {
                let parseNotes;

                try {
                    parseNotes = [].concat(JSON.parse(notes));
                }
                catch (err) {
                    parseNotes = [];
                }
                return parseNotes;
            });
    }

    //////////////////////////////////////////////////////////////////
    // saveNote() function
    //////////////////////////////////////////////////////////////////
    saveNote(note) {
        note.id = this.lastId + 1;
        this.lastId = note.id;

        return this.read()
            .then(notes => {
                let parseNotes = [].concat(JSON.parse(notes));

                parseNotes.push(note);

                this.write(parseNotes);
                return note;
            });
    }
    //////////////////////////////////////////////////////////////////
    // deleteNote() function
    //////////////////////////////////////////////////////////////////
    deleteNote(id) {
        return this.read()
            .then(notes => {
                notes = [].concat(JSON.parse(notes));
                for (let i = 0; i < notes.length; i++) {
                    const note = notes[i];
                    if (note.id === id) {
                        notes.splice(i, 1);
                        break;
                    }
                }
                this.write(notes);
            });
    }
}

//////////////////////////////////////////////////////////////////
// export the module
//////////////////////////////////////////////////////////////////
module.exports = new Store();