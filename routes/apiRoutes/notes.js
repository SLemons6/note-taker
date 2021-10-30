const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNote, deleteNote} = require('../../lib/notes.js');
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => { 
    res.json(notes);
});

router.post("/notes", (req, res) => {
    let payload = req.body;
    payload.id = uuidv4();
    const note = createNote(payload, notes);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, notes);
    res.json({message:'Note deleted successfully!'});
})

module.exports = router;
