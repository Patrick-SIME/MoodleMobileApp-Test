import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './src/navigations/stacknavigation/stack';



// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack/>
//     </NavigationContainer>
//   );
// }

export default class App extends React.Component {
  render() {
    return(
        <MyStack/>
    )
  }
}

