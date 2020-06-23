import React, {useState, createContext} from 'react';

export const NotesContext = createContext(undefined);

export const NotesProvider = (props) => {
    const [notes, setNotes] = useState<Array<String>>([]);
    return (
        <NotesContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    )
}