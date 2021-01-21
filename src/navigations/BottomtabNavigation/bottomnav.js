import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/homescreen/homescreen';
import MyCourseScreen from '../../screens/mycoursescreen/mycoursescreen';
import TimetableScreen from '../../screens/timetablescreen/timetablescreen';
import NotifScreen from '../../screens/notifscreen/notifscreen';
import AccountScreen from '../../screens/accountscreen/accountscreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => (
          <AntDesign name='home' size={20} color='#874ECF' />
      )}} />
      <Tab.Screen name="My Classes" component={MyCourseScreen} options={{tabBarIcon: () => (
          <AntDesign name='book' size={20} color='#874ECF' />
      )}} />
      <Tab.Screen name="Timetable" component={TimetableScreen} options={{tabBarIcon: () => (
          <AntDesign name='calendar' size={20} color='#874ECF' />
      )}} />
      <Tab.Screen name="Notifications" component={NotifScreen} options={{tabBarIcon: () => (
          <Entypo name='bell' size={20} color='#874ECF' />
      )}} />
      <Tab.Screen name="Account" component={AccountScreen} options={{tabBarIcon: () => (
          <MaterialCommunityIcons name='account' size={20} color='#874ECF' />
      )}} />
    </Tab.Navigator>
  );
}