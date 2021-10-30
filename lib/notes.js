const fs = require('fs');
const path = require('path');

function createNote(body, notes) {
    notes.push(body);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes, null, 2)
    );
    return body;
}

function findById(id, notes) {
    const i = notes.findIndex((note) => note.id === id);
    return i;
}

function deleteNote(id, notes) {
    const i = findById(id, notes);
    notes.splice(i, 1);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes, null, 2)
    );

}

module.exports = {createNote, deleteNote};