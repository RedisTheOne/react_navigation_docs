import React, { useContext, useEffect, useState } from 'react';
import { View,  StyleSheet, Button } from 'react-native';
import { NotesContext } from './Context';
import { RootProps } from './RootProps';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

type NoteProps = StackScreenProps<RootProps, 'Note'>;

export default function Note({ navigation, route }: NoteProps) {
    const i = route.params.index;
    const [notes, setNotes] = useContext(NotesContext);
    const [editInput, setEditInput] = useState('');

    useEffect(() => {
        navigation.setOptions({title: notes[i]});
    }, [notes]);

    const editButtonClicked = () => {
        if(/\S/.test(editInput)) {
            let newNotes: Array<String> = [];
            notes.forEach((n: String, j: Number) => {
                if(j === i)
                    newNotes.push(editInput);
                else
                    newNotes.push(n);
            });
            setNotes(newNotes);
            navigation.navigate('Home');
        } else
            alert('Input should not be whitespace');
    }

    return (
        <View style={styles.container}>
            <TextInput value={editInput} onChangeText={e => setEditInput(e)} style={styles.textInput} />
            <Button
                title="Edit"
                onPress={() => editButtonClicked()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    textInput: {
        width: '100%',
        borderBottomColor: '#3e3e3e3e',
        borderBottomWidth: 1,
        padding: 4,
        fontSize: 17,
        marginBottom: 10
    }
});