const { Router } = require('express');
const router = Router();

const { renderNoteForm, createNewNote, renderNotes, renderEditForrm, updateNote, deleteNotes } = require('../controllers/notes.controller');
const { route } = require('./index.routes');

// new notes
router.get('/note/add', renderNoteForm);

router.post('/note/new-note', createNewNote);
// all notes
router.get('/notes', renderNotes);

// Edit notes
router.get('/notes/edit/:id', renderEditForrm);

router.put('/notes/edit/:id', updateNote);

// delete notes
router.delete('/notes/delete/:id', deleteNotes);


module.exports = router;