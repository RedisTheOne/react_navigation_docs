import React from 'react';
import Home from './Home';
import Note from './Note';
import { NotesProvider } from './Context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();

export default function Index() {
    return (
        <NotesProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Note" component={Note} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>     
            </NavigationContainer>
        </NotesProvider>
    )
}