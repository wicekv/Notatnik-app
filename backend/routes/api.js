const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions');


// Pobieranie wszystkich notatek
router.get('/notes', noteActions.getAllNotes);
//Pobieranie konkretnej notatki
router.get('/notes/:id', noteActions.getNote);
// zapisywanie notatek
router.post('/notes', noteActions.saveNote);
// Edytowanie notatek
router.put('/notes/:id', noteActions.updateNote);
// usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote);



module.exports = router;