import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
function HomeScreen() {
    const [isPressed, setIspressed] = useState(false)
    const buttonColorMedium = (isPressed ? '#31B057' : '#EFEEFC')
    const onPress = () => setIspressed(true)
    const [focusedButton, setFocusedButton] = useState(false)
    const buttonColorHard = (focusedButton ? '#FD3654' : '#EFEEFC')
    const buttonColor = () => setFocusedButton(true)
    const [clickedButton,setClickedButton]=useState(false)
    const buttonColorLow=(clickedButton ? '#FF9C00':'#EFEEFC')
    const onclick =()=>setClickedButton(true)
    return (
        <SafeAreaView style={styles.area}>
            <View>
                <Image style={{ marginLeft: 230 }} source={require("../../assets/icons/Group8.png")} />
            </View>
            <View>
                <Image style={{ marginLeft: 56, marginTop: -130 }} source={require("../../assets/icons/Oval.png")} />
                <Image style={{ marginLeft: 355, marginTop: -205 }} source={require('../../assets/icons/star.png')} />
            </View>
            <View style={styles.category}>
                <Text style={styles.choosing}>Choose category</Text>
                <Text style={styles.sport}>Sport</Text>
                <Image style={{ marginLeft: 330, marginTop: -24 }} source={require('../../assets/icons/arrow.png')} />
            </View>
            <View style={styles.level}>
                <Text style={{ color: 'white', marginLeft: 5, fontSize: 16 }}>Choose level</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={onclick} style={[styles.low,{backgroundColor:buttonColorLow}]}>
                    <Text style={{ color: '#6A5AE0', fontFamily: 'Poppins', fontSize: 20, fontWeight: "700", lineHeight: 24 }}>Low</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={[styles.medium, { backgroundColor: buttonColorMedium }]}>
                    <Text style={{ color: '#6A5AE0', fontFamily: 'Poppins', fontSize: 20, fontWeight: '700', lineHeight: 24 }}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={buttonColor} style={[styles.hard, { backgroundColor: buttonColorHard }]}>
                    <Text style={{ color: '#6A5AE0', fontFamily: 'Poppins', fontSize: 20, fontWeight: '700', lineHeight: 24 }}>Hard</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: 32, marginTop: 22 }}>Choose type</Text>
            </View>
            <View style={styles.choosingtype}>
                <TouchableOpacity>
                    <View style={styles.truefalse}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>TRUE / FALSE</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.multiple}>
                        <Text style={{ fontSize: 18, fontWeight: '800', color: '#6A5AE0' }}>Multiple</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.timer}>
                <View>
                    <Image source={require('../../assets/icons/clock.png')} />
                </View>
                <View style={styles.second}>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'white' }}>20 sec</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: -70}}>
                <View>
                    <Image source={require('../../assets/icons/Group7.png')} />
                    <Image style={{marginTop:-230,marginLeft:300}} source={require('../../assets/icons/Oval(1).png')} />
                </View>
                <TouchableOpacity>
                    <View style={styles.start}>
                        <View>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18,marginLeft:120}}>Start QUIZ</Text>
                        </View>
                        <View>
                            <Image style={{marginLeft:100}} source={require('../../assets/icons/forward.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: '#5B4DC3'
    },
    category: {
        marginHorizontal: 30,
        marginTop: -100
    },
    choosing: {
        color: 'white',
        fontSize:16
    },
    sport: {
        fontSize: 20,
        color: 'white'
    },
    level: {
        marginLeft: 25,
        marginTop: 24
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 50
    },
    low: {
        backgroundColor: "#FF9C00",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 10,
        width: 110,
        height: 60,
        marginRight: 32,
    },
    medium: {
        backgroundColor: '#EFEEFC',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        width: 110,
        height: 60,
        marginRight: 25,
    },
    hard: {
        backgroundColor: '#EFEEFC',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        width: 110,
        height: 60,
        marginLeft: 10
    },
    choosingtype: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: -16
    },
    truefalse: {
        backgroundColor: "#6A6AD0",
        alignItems: "center",
        justifyContent: 'center',
        width: 170,
        height: 70,
        borderRadius: 10,
        marginTop: 26,
        marginRight: -16,
    },
    multiple: {
        backgroundColor: "#EFEEFC",
        alignItems: "center",
        justifyContent: 'center',
        width: 170,
        height: 70,
        borderRadius: 10,
        marginTop: 26,
    },
    timer: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20
    },
    second: {
        marginLeft: 12
    },
    start:{
      backgroundColor:"#6A5AE0",
      alignItems:"center",
      justifyContent:'center',
      borderRadius:12,
      width:360,
      height:60,
      flexDirection:"row",
      marginLeft:-300,
      marginTop:240
    }
});

export default HomeScreen;