import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';


class MyClass extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View style={styles.View}>
                <View style={styles.View0}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={styles.Text}>MY CLASSES</Text>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom: 150}} showsVerticalScrollIndicator={false}>
                    <View style={styles.View1}>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={require('../../assets/Pharmolearn2.jpg')}/>
                        </TouchableOpacity>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Arts & Humanities</Text>
                            <Text style={styles.Text2}>Draw and paint Arts</Text>
                            <Text style={styles.Text1}>2h20min</Text>
                        </View>
                    </View>
                    <View style={styles.View1}>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={require('../../assets/Pharmolearn3.png')}/>
                        </TouchableOpacity>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Computer & Technology</Text>
                            <Text style={styles.Text2}>Programming</Text>
                            <Text style={styles.Text1}>6h50min</Text>
                        </View>
                    </View>
                    <View style={styles.View1}>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={require('../../assets/Pharmolearn4.jpg')}/>
                        </TouchableOpacity>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Banking & Finance</Text>
                            <Text style={styles.Text2}>Trading Skills</Text>
                            <Text style={styles.Text1}>4h00min</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1
    },

    View0: {
        marginTop: 40, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingHorizontal: 10
    },

    View1: {
        flexDirection: 'row', 
        height: 120, 
        width: 330, 
        borderRadius: 5, 
        marginHorizontal: 13, 
        elevation: 10, 
        backgroundColor: 'white', 
        marginTop: 40
    },

    View2: {
        height: 120, 
        width: 200, 
        borderBottomEndRadius: 5, 
        borderBottomStartRadius: 5, 
        paddingHorizontal: 5
    },

    Text: {
        color: '#874ECF', 
        marginLeft: 110,
    },

    Text1: {
        fontSize: 10, 
        color: '#874ECF', 
        marginTop: 8,
    },

    Text2: {
        fontWeight: 'bold', 
        fontSize: 13, 
        color: '#874ECF', 
        marginTop: 8,
    },

    Image: {
        height: 120, 
        width: 150, 
        borderRadius: 5
    },
});


export default MyClass