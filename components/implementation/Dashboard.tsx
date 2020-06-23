import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TextInput } from 'react-native-gesture-handler';
import { NotesContext } from './Context';
import { RootProps } from './RootProps';
import { StackScreenProps } from '@react-navigation/stack';

type DashboardProps = StackScreenProps<RootProps, 'Dashboard'>;

const Tab = createBottomTabNavigator();

function Add() {
    const [notes, setNotes] = useContext(NotesContext);
    const [addInput, setAddInput] = useState("");
    
    const addButtonClicked = () => {
        if(/\S/.test(addInput)) {
            let newNotes: Array<String> = [];
            notes.forEach(n => newNotes.push(n));
            newNotes.push(addInput);
            setNotes(newNotes);
            setAddInput('');
            alert('Note Added');
        } else
            alert('The reqired filed should not be whitespace');
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value={addInput} onChangeText={e => setAddInput(e)} />
            <Button
                title="Add"
                onPress={() => addButtonClicked()}
            />
        </View>
    )
}

function Delete() {
    const [notes, setNotes] = useContext(NotesContext);

    const listItemPressed = (i: Number) => {
        let newNotes: Array<String> = [];
        notes.forEach((n, j: Number) => {
            if(i !== j)
                newNotes.push(n);
        });
        setNotes(newNotes);
        alert('Note Deleted');
    }

    return (
        <View>
            <ScrollView>
                {notes.map((n, i) => (
                    <TouchableOpacity onPress={() => listItemPressed(i)} key={i}>
                        <Text style={styles.listItem}>{n}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default function Dashboard({ navigation }: DashboardProps) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Add') {
                        iconName = 'ios-add';
                    } else if (route.name === 'Delete') {
                        iconName = 'ios-remove';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Delete" component={Delete} />
        </Tab.Navigator>
    );
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