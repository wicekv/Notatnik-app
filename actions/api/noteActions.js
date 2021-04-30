const Note = require('../../db/models/note');

class NoteActions {
    saveNote(req, res){

        // const newNote = new Note({
        //     title: 'Szybkie zakupy',
        //     body: 'Zakupy w biedronce'
        
        // });
        const title = req.body.title;
        const body = req.body.body;

        newNote.save().then(() => {
            console.log('Notatka została dodana' + title + ' tresc ' + body);
        })

        res.send('Strona główna działa!');
    }

    getAllNotes(req, res) {
        //pobieranie wszystkich notatek
        res.send('pobieranie wszystkich notatek');
    }

    getNote(req, res) {
        //pobieranie jednej notatki
        res.send('pobieranie jednej notatki');
    }

    updateNote(req, res) {
        //aktualizacja notatki
        res.send('aktualizacja notatki');
    }
    
    deleteNote(req, res) {
        //usuwanie notatki
        const id = req.params.id;
        res.send('usuwanie notatki o ID '+ id);
    }
}

module.exports = new NoteActions();