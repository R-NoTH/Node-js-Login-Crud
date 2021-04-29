const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) =>{
  res.send('noteAdd');
}

notesCtrl.createNewNote = () =>{
  res.send('nueva nota '); 
}

notesCtrl.renderNotes = (req,res) =>{
  res.send('render notas ');
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