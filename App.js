import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./LoginScreen.js";
import HomeScreen from "./HomeScreen.js";
import AboutScreen from "./AboutScreen.js";
import BikeListScreen from "./BikeListScreen.js"; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="BikeList" component={BikeListScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
