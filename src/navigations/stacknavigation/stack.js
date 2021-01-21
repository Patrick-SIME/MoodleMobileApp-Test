import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/welcomescreen/index';
import LoginScreen from '../../screens/loginscreen/logscreen';
import CreaccountScreen from '../../screens/creaccountscreen/creaccountscreen';
import MyTabs from '../BottomtabNavigation/bottomnav';
import CourselevelScreen from '../../screens/courselevelscreen/index';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Create Account" component={CreaccountScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Courselevel" component={CourselevelScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Bottomnav" component={MyTabs} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}