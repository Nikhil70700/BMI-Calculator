import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Stack Navigator Function
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: '#b6b1b1' } }} //Aligning Header Title to center applicable to all screens 
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerStyle: { backgroundColor: '#b6b1b1' } }} //Customizing Header

      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search Screen',
          headerStyle: { backgroundColor: 'cyan' }, headerTitleStyle: { color: 'blue', fontSize: 25, fontWeight: 'bold' }
        }}//Customizing Header
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

// Tab Navigator Function
function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'black', tabBarLabelStyle: { fontSize: 20 },
        tabBarStyle: { backgroundColor: '#b6b1b1', height: 70, justifyContent: 'center', alignItems: 'center' }
      }} //Customizing Tab Bar
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntIcon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialDesignIcons name="account-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcon name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      {/* Stack Navigator  */}
      {/* <StackNavigator /> */}

      {/* Tab Navigator */}
      <TabNavigator />


    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
