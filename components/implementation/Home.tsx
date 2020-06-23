import React, { useContext, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NotesContext } from './Context';
import { RootProps } from './RootProps';
import { StackScreenProps } from '@react-navigation/stack';

type HomeProps = StackScreenProps<RootProps, 'Home'>;

export default function Home({ navigation }: HomeProps) {
    const [notes, setNotes] = useContext(NotesContext);

    const listItemPressed = (i: Number) => {
        navigation.navigate('Note', {
            index: i
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {notes.map((n: String, i: Number) => (
                    <View key={i}>
                        <TouchableOpacity onPress={() => listItemPressed(i)} style={styles.listItem}>
                            <Text style={{fontSize: 16}}>{n}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <Button
                onPress={() => {
                    navigation.navigate('Dashboard')
                }}
                title={'Add Note'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    scrollView: {
        flex: 1, 
    },
    listItem: {
        padding: 10,
        borderBottomColor: '#3e3e3e3e',
        borderBottomWidth: 1
    }
});