import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TrueFalseScreen() {
    return (
        <SafeAreaView>
            <ImageBackground source={require('../../assets/images/background.png')}>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default TrueFalseScreen