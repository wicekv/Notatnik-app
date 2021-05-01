const Note = require('../../db/models/note');

class NoteActions {
    async saveNote(req, res){
        const title = req.body.title;
        const body = req.body.body;

        let note;

        try{
            note = new Note({title, body});
            await note.save();
        }catch(err){
            return res.status(200).json({message: err.message})
        }

        res.status(200).json(note);

        // // const newNote = new Note({
        // //     title: 'Szybkie zakupy',
        // //     body: 'Zakupy w biedronce'
        
        // // });

        // newNote.save().then(() => {
        //     console.log('Notatka została dodana' + title + ' tresc ' + body);
        // })

        // res.send('Strona główna działa!');
    }

    //pobieranie wszystkich notatek
   async getAllNotes(req, res) {
        const doc = await Note.find({});

        res.status(201).json(doc);
    }

    //pobieranie jednej notatki
    async getNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({_id: id});
        res.status(200).json(note);
    }

    //aktualizacja notatki
    async updateNote(req, res) {
        const id = req.params.id
        const title = req.body.title;
        const body = req.body.body;

        const note = await Note.findOne({_id: id});
        note.title = title;
        note.body = body;
        await note.save();

        res.status(201).json(note);
    }

    //usuwanie notatki
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({_id: id});

        res.sendStatus(204);
    }
}

module.exports = new NoteActions();