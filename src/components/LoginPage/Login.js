import React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Login extends React.Component {

    state = {
        username: "",
        password: "",
        error: "",
        loader: true,
        checked: false,
    }

    login =() => {

        this.setState({loader: false})

        fetch('https://pharmoodlelearning.moodlecloud.com/login/token.php?service=moodle_mobile_app&username=' + this.state.username+ '&password='+ this.state.password)
        .then (response => response.json())
        .then (resp => {
            this.setState({loader: true})
            if (resp.token != undefined){
                this.props.navigation.navigate('Courselevel')
                this.setState({error: ""})
            }
            else {
                this.setState({error: 'username or password is incorrect'})
            }
        })
    } 

    render() {

        const navigation=this.props.navigation;
        return(
            <View>
                <View style={styles.View}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={styles.Text}>LOG IN</Text>
                </View>
                <View style={styles.View0}>
                    <Text style={styles.Text0}>Pharmoodle learning</Text>
                    <Text style={styles.Text1}>Enter your log in details to access your account</Text>
                </View>
                <View style={styles.View1}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Fontisto name= 'facebook' size={20} color= 'white' />
                        <Text style={styles.Text2}> Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity0}>
                        <AntDesign name= 'googleplus' size={20} color= 'white' />
                        <Text style={styles.Text2}> Google</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput onChangeText={(username) =>this.setState({username})} style={styles.TextInput} placeholder= "Username" />
                    <TextInput secureTextEntry onChangeText={(password) =>this.setState({password})} style={styles.TextInput}  placeholder= "Password" />
                </View>
                <View style={styles.View2}>
                    <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({checked: !this.state.checked})}
                    style={styles.CheckBox}
                    />
                    <Text style={styles.Text3}>Remember Me?</Text>
                    <Text style={styles.Text4}>Forgot password?</Text>
                </View>
                <View style={styles.View3}>
                    <TouchableOpacity onPress={this.login} style={styles.TouchableOpacity1}>
                        <Text style={styles.Text2}>log in with your account</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 50}}>
                    {this.state.loader ? <Text style={styles.TextError}> {this.state.error} </Text> : <ActivityIndicator size={50} color='blue'/>}
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text3}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Create Account')}>
                        <Text style={styles.Text5}> create account</Text>
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

    TextError:{
        color: 'red',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 10
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
        paddingVertical: 90, 
        flexDirection: 'row'
    },

    Text: {
        color: '#874ECF', 
        marginLeft: 130
    },

    Text0: {
        color: '#874ECF', 
        fontWeight: 'bold', 
        fontSize: 20
    },

    Text1: {
        color: '#874ECF', 
        marginTop: 50, 
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

export default Login