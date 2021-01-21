import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';


class Courselevel extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View style={styles.View}>
                <View style={styles.View0}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.View1}>
                    <Text style={styles.Text}>Pharmoodle learning</Text>
                </View>
                <Image style={styles.Image} source={require('../../assets/Pharmolearn0.jpg')} />
                <Text style={styles.Text0}>Select your course level</Text>
                <View style={styles.View2}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text1}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity0}>
                        <Text style={styles.Text2}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity0}>
                        <Text style={styles.Text2}>Expert</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View3}>
                    <CheckBox
                    style={styles.CheckBox}
                    />
                    <Text style={styles.Text2}>Are you sure?</Text>
                </View>
                <View style={styles.View4}>
                    <TouchableOpacity onPress={() => navigation.navigate('Bottomnav')} style={styles.TouchableOpacity1}>
                        <Text style={styles.Text1}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    CheckBox: {
        alignSelf: 'center'
    },

    View: {
        backgroundColor: 'white', 
        flex: 1
    },

    View0: {
        marginTop: 40, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingHorizontal: 10
    },

    View1: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40, 
        marginTop: 20
    },

    View2: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 20
    },

    View3: {
        marginHorizontal: 14, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        marginTop: 60, 
        alignItems: 'center'
    },

    View4: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 40
    },

    Text: {
        color: '#874ECF', 
        fontWeight: 'bold', 
        fontSize: 20
    },

    Text0: {
        color: '#874ECF', 
        fontSize: 20, 
        marginHorizontal: 14, 
        marginTop: 15
    },

    Text1: {
        color: 'white'
    },

    Text2: {
        color: '#874ECF'
    },

    Image: {
        height: 250, 
        width: 360, 
        marginTop: 30
    },

    TouchableOpacity: {
        backgroundColor: '#874ECF', 
        width: 100, 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 25
    },

    TouchableOpacity0: {
        borderWidth: 1, 
        borderColor: '#874ECF', 
        width: 100, 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 25
    },

    TouchableOpacity1: {
        backgroundColor: "#874ECF", 
        height: 45, 
        width: 220, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 25 
    }
})

export default Courselevel