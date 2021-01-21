import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';


class Account extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View>
                <View style={styles.View}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={styles.Text}>MY ACCOUNT</Text>
                </View>
                <View style={styles.View0}>
                    <Image style={styles.Image} source={require('../../assets/Pharmolearn5.jpg')} />
                    <View style={styles.View1}>
                        <Text style={styles.Text0}>Raymond</Text>
                        <Text style={styles.Text1}>raymond@mymail.com</Text>
                    </View>
                </View>
                <View style={styles.View2}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text2}>Account Setting</Text>
                        <AntDesign name='right' size={15} color='#874ECF' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text2}>Download Options</Text>
                        <AntDesign name='right' size={15} color='#874ECF' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text2}>Notifications Setting</Text>
                        <AntDesign name='right' size={15} color='#874ECF' />
                    </TouchableOpacity>
                </View>
                <View style={styles.View2}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text2}>Privacy Policy</Text>
                        <AntDesign name='right' size={15} color='#874ECF' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text2}>Help Center</Text>
                        <AntDesign name='right' size={15} color='#874ECF' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text2}>About Us</Text>
                        <AntDesign name='right' size={15} color='#874ECF' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text3}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View3}>
                    <TouchableOpacity style={styles.TouchableOpacity0}>
                        <Text style={styles.Text1}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        marginTop: 40, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingHorizontal: 10
    },

    View0: {
        backgroundColor: '#874ECF', 
        height: 150, 
        paddingHorizontal: 30, 
        paddingVertical: 30, 
        flexDirection: 'row', 
        marginTop: 45
    },

    View1: {
        paddingHorizontal: 10, 
        paddingVertical: 10
    },

    View2: {
        marginTop: 20
    },

    View3: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40
    },

    Image: {
        borderRadius: 50, 
        height: 80, 
        width: 80
    },

    Text: {
        color: '#874ECF', 
        marginLeft: 110
    },

    Text0: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20
    },

    Text1: {
        color: 'white'
    },

    Text2: {
        color: '#874ECF', 
        fontSize: 15
    },

    Text3: {
        color: 'red', 
        fontSize: 15
    },

    TouchableOpacity: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 25, 
        marginTop: 5
    },

    TouchableOpacity0: {
        backgroundColor: "#874ECF", 
        height: 45, 
        width: 220, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 25 
    },
});


export default Account