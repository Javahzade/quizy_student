import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import LevelButton from '../../components/LevelButton/LevelButton';
import VectorIcon from '../../assets/icons/Vector.svg'
import ArrowVectorIcon from '../../assets/icons/ArrowVector.svg'
import ForwardVectorIcon from '../../assets/icons/ForwardVector.svg'
import CLockIcon from '../../assets/icons/Clockicon.svg'
import ChoosingButton from '../../components/ChoosingButton/ChoosingButton';
function HomeScreen() {
    const [selectedLevel,setSelectedLevel]=useState<string|null>(null);
    const onSelectLevel=(key:string)=>{
        setSelectedLevel(key)
    }
    const [choosedLevel,setChoosedLevel]=useState<string|null>(null);
    const onChooseLevel=(key:string)=>{
        setChoosedLevel(key)
    }
    return (
      <ImageBackground style={styles.background} source={require('../../assets/images/background.png')}>
        <SafeAreaView style={styles.area}>
          <View style={styles.header}>
            <TouchableOpacity style={{width:'3%',height:'3%'}}>
                <VectorIcon style={{marginTop:30}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.choose}>
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
            <View style={styles.choosingtype}>
             <View style={styles.type}>
                <Text style={{ fontSize: 16, color: 'white'}}>Choose type</Text>
             </View>
                <View style={styles.button}>
                 <ChoosingButton buttonTitle='True/False' onSelect={()=>onChooseLevel('True/False')} isSelected={choosedLevel==='true/false'} onSelectColor={'#6A6AD0'}/>
                 <ChoosingButton buttonTitle='Multiple' onSelect={()=>onChooseLevel('Multiple')} isSelected={choosedLevel==='multiple'} onSelectColor={'white'}/>
                </View>
            </View>
            <View style={styles.timer}>
                <TouchableOpacity>
                 <CLockIcon/>
                </TouchableOpacity>
                <View style={styles.second}>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'white' }}>20 sec</Text>
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
    choose:{
        // alignSelf:'center',
        justifyContent:'center',

    },
    choosing: {
        color: 'white',
        fontSize:16
    },
    sport: {
        fontSize: 20,
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    choosingtype: {
        justifyContent: 'space-evenly',
        //marginBottom:26
    },
    type:{
        marginBottom:10
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    timer: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
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
