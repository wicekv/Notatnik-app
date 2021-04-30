const Note = require('../../db/models/note');

module.exports = {
    saveNote(req, res){

        const newNote = new Note({
            title: 'Szybkie zakupy',
            body: 'Zakupy w biedronce'
        
        });
        
        newNote.save().then(() => {
            console.log('Notatka została dodana')
        })

        res.send('Strona główna działa!');
    }
}