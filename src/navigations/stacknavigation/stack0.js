import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookClassScreen from '../../screens/bookclasscreen/bookclasscren';
import LoginScreen from '../../screens/loginscreen/logscreen';
import CreaccountScreen from '../../screens/creaccountscreen/creaccountscreen';
import CourselevelScreen from '../../screens/courselevelscreen/index';

const Stack = createStackNavigator();

export default function MyStack0() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookClass" component={BookClassScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}