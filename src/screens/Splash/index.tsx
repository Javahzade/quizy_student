import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import AppLogoIcon from "../../svgIcons/AppLogo";

function SplashScreen() {
    return (
        <SafeAreaView style={styles.area}>
            <ImageBackground style={styles.back} source={require("../../assets/images/background.png")}>
                <View style={styles.logo}>
                    <AppLogoIcon />
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}
export default SplashScreen


const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#6A5AE0"
    },
    back: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        alignItems: "center",
        justifyContent: "center"
    }
});
