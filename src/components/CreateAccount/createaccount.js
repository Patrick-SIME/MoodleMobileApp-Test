import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';


class CreateAccount extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View>
                <View style={styles.View}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={styles.Text}>NEW ACCOUNT</Text>
                </View>
                <View style={styles.View0}>
                    <Text style={styles.Text0}>Pharmoodle learning</Text>
                    <Text style={styles.Text1}>Enter your informations to create your account</Text>
                </View>
                <View>
                    <TextInput style={styles.TextInput}  placeholder= "Name" />
                    <TextInput style={styles.TextInput}  placeholder= "Surname" />
                    <TextInput style={styles.TextInput} placeholder= "Email" />
                    <TextInput style={styles.TextInput}  placeholder= "Password" />
                    <TextInput style={styles.TextInput}  placeholder= "Password Again" />
                    <TextInput style={styles.TextInput}  placeholder= "Phone Number" />
                </View>
                <View style={styles.View2}>
                    <CheckBox
                    style={styles.CheckBox}
                    />
                    <Text style={styles.Text3}>Remember Me?</Text>
                </View>
                <View style={styles.View3}>
                    <TouchableOpacity onPress={() => navigation.navigate('Courselevel')} style={styles.TouchableOpacity1}>
                        <Text style={styles.Text2}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text3}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.Text5}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    CheckBox: {
        alignSelf: 'center'
    },

    View: {
        marginTop: 40, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingHorizontal: 10
    },

    View0: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40, 
        marginTop: 20
    },

    View1: {
        flexDirection: 'row', 
        marginTop: 30
    },

    View2: {
        marginHorizontal: 14, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        marginTop: 10, 
        alignItems: 'center'
    },

    View3: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40
    },

    View4: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40, 
        paddingVertical: 10, 
        flexDirection: 'row'
    },

    Text: {
        color: '#874ECF', 
        marginLeft: 110
    },

    Text0: {
        color: '#874ECF', 
        fontWeight: 'bold', 
        fontSize: 20
    },

    Text1: {
        color: '#874ECF', 
        marginTop: 10, 
        fontSize: 18, 
        textAlign: 'center'
    },

    Text2: {
        color: 'white'
    },

    Text3: {
        color: '#874ECF',
    },

    Text4: {
        color: '#D74B34', 
        marginLeft: 93
    },

    Text5: {
        color: '#1702E3'
    },

    TextInput: {
        borderWidth: 2, 
        marginTop: 25, 
        marginHorizontal: 14, 
        borderRadius: 10, 
        paddingLeft: 15, 
        height: 45, 
        borderColor: '#D9D3E5'
    },

    TouchableOpacity: {
        backgroundColor: '#1A0AE5', 
        height: 50, 
        width: 150, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 14, 
        borderRadius: 10
    },

    TouchableOpacity0: {
        backgroundColor: '#D74B34', 
        height: 50, 
        width: 150, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 14, 
        borderRadius: 10
    },

    TouchableOpacity1: {
        backgroundColor: "#874ECF", 
        height: 45, 
        width: 220, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 25 
    },
})

export default CreateAccount