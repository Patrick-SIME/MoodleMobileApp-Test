import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';


class Timetable extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View style={{flex: 1}}>
                <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={{color: '#874ECF', marginLeft: 110}}>TIMETABLE</Text>
                </View>
                <ScrollView>
                    <View style={{flexWrap: 'wrap', paddingVertical: 20, width: 360}}>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center', height: 100, width: 360}}>
                            <Image style={{height: 50, width: 50}} source={require('../../assets/museum_80px.png')}/>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: '#874ECF'}}>Screening of Films 'Safety online'</Text>
                                <Text style={{fontSize: 15, color: '#874ECF'}}>04/02/2021, 05:30 pm</Text>
                            </View>
                            <AntDesign name='right' size={20} color='#874ECF' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center', height: 100, width: 360}}>
                            <Image style={{height: 50, width: 50}} source={require('../../assets/globe.png')}/>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: '#874ECF'}}>Breakfast Club</Text>
                                <Text style={{fontSize: 15, color: '#874ECF'}}>10/02/2021, 04:20 pm</Text>
                            </View>
                            <AntDesign name='right' size={20} color='#874ECF' />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default Timetable