import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamsList = {
    Home: undefined;
    Settings: undefined;
};

type HomeProps = BottomTabScreenProps<RootStackParamsList, 'Home'>;
type SettingsProps = BottomTabScreenProps<RootStackParamsList, 'Settings'>;

function HomeScreen({ navigation }: HomeProps) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
}

function SettingsScreen({}: SettingsProps) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        </View>
    );
}
  
const Tab = createBottomTabNavigator();

export default function App() {
return (
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'ios-home';
                } else if (route.name === 'Settings') {
                    iconName = 'ios-settings';
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
);
}