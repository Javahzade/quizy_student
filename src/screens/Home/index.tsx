import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import LevelButton from '../../components/LevelButton/LevelButton';
import VectorIcon from '../../assets/icons/Vector.svg'
import ArrowVectorIcon from '../../assets/icons/ArrowVector.svg'
import ForwardVectorIcon from '../../assets/icons/ForwardVector.svg'
function HomeScreen() {
    const [selectedLevel,setSelectedLevel]=useState<string|null>(null);
    const onSelectLevel=(key:string)=>{
        setSelectedLevel(key)
    }
    return (
      <ImageBackground style={styles.background} source={require('../../assets/images/background.png')}>
        <SafeAreaView style={styles.area}>
          <View style={styles.header}>
            <TouchableOpacity style={{width:24,height:24}}>
                <VectorIcon style={{marginTop:48}}/>
            </TouchableOpacity>
          </View>
          <View>

          <View style={{marginBottom:24}}>
              <Text style={styles.choosing}>Choose category</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                 <Text style={styles.sport}>Sport</Text>
                 <TouchableOpacity>
                    <ArrowVectorIcon/>
                 </TouchableOpacity>
              </View>
              <Text style={{ color: 'white', fontSize: 16 }}>Choose level</Text>
          </View>
          <View style={styles.container}>
              <LevelButton buttonTitle='Low' onSelect={()=>onSelectLevel('low')} isSelected={selectedLevel==='low'} onSelectColor={'#FF9C00'}/>
              <LevelButton buttonTitle='MEDIUM' onSelect={()=>onSelectLevel('medium')}isSelected={selectedLevel==='medium'} onSelectColor={'#31B057'}/>
              <LevelButton buttonTitle='HARD' onSelect={()=>onSelectLevel('hard')} isSelected={selectedLevel==='hard'}onSelectColor={'#FD3654'}/>
          </View>
          </View>
          <View>
             <TouchableOpacity style={styles.start}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 18}}>Start QUIZ</Text>
              <View style={{position:'absolute', right:10}}>
                <ForwardVectorIcon/>
              </View>
             </TouchableOpacity>
          </View>
            {/* <View>
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
            </View> */}
        </SafeAreaView>
      </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#5B4DC3'
    },
    area: {
        flex: 1,
        paddingHorizontal:30,
        justifyContent:'space-between'
    },
    header:{
        alignItems:'flex-end',
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
      borderRadius:10,
      height:60,
      marginBottom:20
    }
});

export default HomeScreen;
