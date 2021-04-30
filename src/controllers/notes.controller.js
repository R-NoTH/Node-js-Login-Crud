const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req,res) =>{
  res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req,res) =>{
  const { title,description } = req.body;
  const newNote = new Note({
    // Los valores que nos pide el model en este caso title y description
    title,
    description
  });
  await newNote.save();
  res.send('notes/allNotes');
}

notesCtrl.renderNotes = async (req,res) =>{
  const notes = await Note.find().lean();
  res.render('notes/allNotes',{notes});
}

notesCtrl.renderEditForrm = (req,res) => {
  res.send('edit notes..');
}

notesCtrl.updateNote = (req,res) => {
  res.send('edit notes..');
}


notesCtrl.deleteNotes = (req,res) => {
  res.send('eliminando note..');
}
module.exports = notesCtrl;