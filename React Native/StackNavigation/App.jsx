import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{headerStyle:{backgroundColor:'#b6b1b1'}}} //Aligning Header Title to center applicable to all screens 
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerStyle:{backgroundColor:'#b6b1b1'}}} //Customizing Header
    
        />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title:'Search Screen',
        headerStyle:{backgroundColor:'cyan'},headerTitleStyle:{color:'blue',fontSize:25,fontWeight:'bold'}
        }}//Customizing Header
        />
      <Stack.Screen
        name="Profile"
        component={Profile}
         />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
