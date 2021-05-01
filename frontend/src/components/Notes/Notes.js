import React from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';
import EditNote from './EditNote/EditNote';
import axios from '../../axios';

class Notes extends React.Component {
    constructor(props){
        super();
        ///
        this.state = {
            notes : [],
            showEditModal: false,
            editNote: {}
        };
    }

    componentDidMount(){
        this.fechNotes();
    }

   async fechNotes(){
        const res = await axios.get('/notes');
        const notes = res.data;

        this.setState({notes})
    }

    async deleteNote(id){
        console.log('usuwanie notatki', id);
        const notes = [...this.state.notes]
                        .filter(note => note._id !== id);

        await axios.delete('/notes/' + id)
        this.setState({notes});
    }

    async addNote(note){
        const notes = [...this.state.notes];
        // backend
       const res = await axios.post('/notes', note)
       const newNote = res.data;
        // frontend
        notes.push(newNote);
        this.setState({notes});
    }

    async editNote(note){
        //edit backend
       await axios.put('/notes/'+ note._id, note)
        //edit frontend
        const notes = [...this.state.notes];
        const index = notes.findIndex(x => x._id === note._id);
        if(index >= 0){
            notes[index] = note
            this.setState({notes});
        }
        this.toggleModal();
    }

    toggleModal(){
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler(note){
        this.toggleModal();
        this.setState({ editNote: note});
    }

    render(){
        return(
            <div>
                <p>Moje notatki:</p>

                <NewNote 
                onAdd={(note) => this.addNote(note)}/>

                <Modal
                isOpen={this.state.showEditModal}
                contentLabel="Zapisz notatke">
                    <EditNote
                    title={this.state.editNote.title}
                    body={this.state.editNote.body}
                    id={this.state.editNote._id}
                        onEdit={note => this.editNote(note)}
                    />
                    <button onClick={() => this.toggleModal()}>Anuluj</button>
                </Modal>

                {this.state.notes.map(note => {
                    return(
                   <Note 
                   key = {note._id}
                   title={note.title}
                   body={note.body}
                   id={note._id}
                   onEdit={(note) => this.editNoteHandler(note)}
                   onDelete={(id) => this.deleteNote(id)}/>
                )})}
            </div>
        )
    }
}

export default Notes;