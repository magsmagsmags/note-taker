const store = require("fs");
const util = require("util");

//fixes probs will async calls to api and reading files
const readFileA = util.promisify(fs.readFile)
const writeFileA = util.promisify(fs.writeFile)


//store is a specislized parent function. holds all the children inside it 
class Store {
    constructor() {
        this.lastId[0] = 0;
    }
    //////// all of these have return statements. 
    /// read and write funcions hav eonly one line inside of them. 
    // Just return (readfileA, writefileA)
    // read returns files from bd.json

    read() {
        ///////// utfa formats the read
        return readFileA("/db.json", JSON.stringify(note));
    }
    //this function is expecting something to be passed via note
    write(note) {
        return writeFileA("/db.json", "utf8");
        /////
    }

    getNotes() {
        /////
    }
    addNotes(note) {

    }
    deleteNotes(id) {

    }



}

module.exports = new Store();