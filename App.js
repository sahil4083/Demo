import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './LogoScreen.js';
import LoginScreen from './LoginScreen.js';
import Signup from './Signup.js'; 
import HomeScreen from './HomeScreen.js';
import PersonalInfoScreen from './PersonalInfoScreen';
import AboutScreen from './AboutScreen.js';
import BikeListScreen from './BikeListScreen.js';
import BikeDetailScreen from './BikeDetailScreen.js'; 
import SettingsScreen from './SettingsScreen';
import AccessoriesScreen from './AccessoriesScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import NotificationsScreen from './NotificationsScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          name="Logo"
          component={LogoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={Signup} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="BikeList" component={BikeListScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Accessories" component={AccessoriesScreen} /> 
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        
    <Stack.Screen
          name="BikeDetail"
          component={BikeDetailScreen}
          options={({ route }) => ({ title: route.params.bikeName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
