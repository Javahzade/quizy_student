import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function truefalse(){
    return(
        <ImageBackground source={require('../../assets/images/background.png')}>
            <SafeAreaView>
                
            </SafeAreaView>
        </ImageBackground>
    )
}

export default truefalse