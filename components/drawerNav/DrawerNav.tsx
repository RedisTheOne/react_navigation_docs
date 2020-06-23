import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamsList = {
    Home: undefined;
    Notifications: undefined;
};

type HomeProps = DrawerScreenProps<RootStackParamsList, 'Home'>
type NotificationsProps = DrawerScreenProps<RootStackParamsList, 'Notifications'>

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }: NotificationsProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}