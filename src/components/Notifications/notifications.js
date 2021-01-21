import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, Header, TextInput, CheckBox } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';


class Notification extends React.Component {
    render() {

        const navigation=this.props.navigation;
        return(
            <View>
                <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign  name= 'left' size={20} color='#874ECF'/>
                    </TouchableOpacity>
                    <Text style={{color: '#874ECF', marginLeft: 110}}>NOTIFICATIONS</Text>
                </View>
                <ScrollView>
                    <View style={{flexWrap: 'wrap', paddingVertical: 20, width: 360}}>
                        <View style={{marginTop: 5, marginHorizontal: 5, borderBottomWidth: 1}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'flex-start'}}>
                                <Image style={{borderRadius: 50, height: 60, width: 60}} source={require('../../assets/usericon.jpg')} />
                                <View style={{paddingHorizontal: 10}}>
                                    <Text>Mr Teddy</Text>
                                    <Text>04/02/2020</Text>
                                </View>
                            </View>
                            <Text style={{paddingHorizontal: 10, paddingVertical: 10,}}>Mr Teddy posted in Nature Arts. 'Oceans & Mountains.'</Text>
                            <TouchableOpacity style={{paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <AntDesign name='eye' size={15} color='#874ECF' />
                                <Text style={{color: '#874ECF'}}>View</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 5, marginHorizontal: 5, borderBottomWidth: 1}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'flex-start'}}>
                                <Image style={{borderRadius: 50, height: 60, width: 60}} source={require('../../assets/usericon0.jpg')} />
                                <View style={{paddingHorizontal: 10}}>
                                    <Text>Mr Martin Da Gr8t</Text>
                                    <Text>04/02/2020</Text>
                                </View>
                            </View>
                            <Text style={{paddingHorizontal: 10, paddingVertical: 10,}}>Mr Martin posted in Programming Club. 'Tech Design.'</Text>
                            <TouchableOpacity style={{paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <AntDesign name='eye' size={15} color='#874ECF' />
                                <Text style={{color: '#874ECF'}}>View</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default Notification