import React from 'react';
import './Notes.css';
import Note from './Note/Note';
class Notes extends React.Component {

    constructor(props){
        super();
        this.notes = [
            {
                id: '123',
                title: 'Wykąpać psa',
                body: 'pamietaj aby wykapac psa specjalnym szamponem'
            },
            {
                id: '423',
                title: 'Zrobic zakupy',
                body: 'pamietaj aby kupić mleko, masło, likier'
            }
        ];
    }

    render(){
        return(
            <div>
                <p>Moje notatki:</p>

                {this.notes.map(note => {
                    return(
                   <Note title={note.title}
                   body={note.body}
                   id={note.id}/>
                )})}
            </div>
        )
    }
}

export default Notes;