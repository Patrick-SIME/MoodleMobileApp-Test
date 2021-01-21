import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header } from "react-native";

class Pharmoodle extends React.Component{
    render () {
        return(
            <View style={styles.View}>
                <Text style={styles.Text}>Pharmoodle learning</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1, 
        backgroundColor: "#874ECF", 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40
    },

    Text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'white', 
        textAlign: 'center'
    }
})

export default Pharmoodle