import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';



class HomePage extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View style={styles.View}>
                <View style={styles.View0}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={styles.Text}>HOME</Text>
                </View>
                <Text style={styles.Text0}>WELCOME BACK RAYMOND</Text>
                <View style={styles.View1}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text1}>Book Class</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity0}>
                        <Text style={styles.Text1}>My Courses</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Text2}>Last Classes</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.View2}>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={require('../../assets/Pharmolearn2.jpg')}/>
                        </TouchableOpacity>
                        <View style={styles.View3}>
                            <Text style={styles.Text3}>Arts & Humanities</Text>
                            <Text style={styles.Text4}>Draw and paint Arts</Text>
                            <Text style={styles.Text3}>2h20min</Text>
                        </View>
                    </View>
                    <View style={styles.View2}>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={require('../../assets/Pharmolearn3.png')}/>
                        </TouchableOpacity>
                        <View style={styles.View3}>
                            <Text style={styles.Text3}>Computer & Technology</Text>
                            <Text style={styles.Text4}>Programming</Text>
                            <Text style={styles.Text3}>6h50min</Text>
                        </View>
                    </View>
                    <View style={styles.View2}>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={require('../../assets/Pharmolearn4.jpg')}/>
                        </TouchableOpacity>
                        <View style={styles.View3}>
                            <Text style={styles.Text3}>Banking & Finance</Text>
                            <Text style={styles.Text4}>Trading Skills</Text>
                            <Text style={styles.Text3}>4h00min</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create ({
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
        marginTop: 60
    },

    View2: {
        height: 200, 
        width: 200, 
        borderRadius: 5, 
        marginHorizontal: 13, 
        elevation: 10, 
        backgroundColor: 'white', 
        marginTop: 10
    },

    View3: {
        height: 80, 
        width: 200, 
        borderBottomEndRadius: 5, 
        borderBottomStartRadius: 5,
    },

    Text: {
        color: '#874ECF', 
        marginLeft: 130
    },

    Text0: {
        fontWeight: 'bold', 
        fontSize: 30, 
        color: '#874ECF', 
        paddingHorizontal: 13, 
        marginTop: 25
    },

    Text1: {
        color: 'white'
    },

    Text2: {
        fontSize: 25, 
        color: '#874ECF', 
        paddingHorizontal: 13, 
        marginTop: 25
    },

    Text3: {
        fontSize: 10, 
        color: '#874ECF', 
        paddingHorizontal: 13, 
        marginTop: 8
    },
    
    Text4: {
        fontWeight: 'bold', 
        fontSize: 13, 
        color: '#874ECF', 
        paddingHorizontal: 13, 
        marginTop: 8
    },

    TouchableOpacity: {
        backgroundColor: '#874ECF', 
        height: 40, 
        width: 110, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 14, 
        borderRadius: 10
    },

    TouchableOpacity0: {
        backgroundColor: '#874ECF', 
        height: 40, 
        width: 110, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10
    },

    Image: {
        height: 120, 
        width: 200, 
        borderRadius: 5
    }
})

export default HomePage