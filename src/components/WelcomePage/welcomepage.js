import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';


class Welcomepage extends React.Component {
    render () {

        const navigation=this.props.navigation;
        return (
            <View style={styles.View}>
                <Image style={styles.Image} source={require('../../assets/Pharmoodleimg.jpg')}/>
                <Text style={styles.Text}>Pharmoodle learning online</Text>
                <Text style={styles.Text0}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')} style={styles.TouchableOpacity}>
                    <Text style={styles.Text1}>Start learning</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40, 
        paddingVertical: 40
    },

    Image: {
        height: 200, 
        width: 320
    },

    Text: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: "#874ECF", 
        marginTop: 15
    },

    Text0: {
        marginTop: 5
    },

    Text1: {
        color: 'white'
    },

    TouchableOpacity: {
        backgroundColor: "#874ECF", 
        height: 45, 
        width: 220, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 25 
    },
})

export default Welcomepage