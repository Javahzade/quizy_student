import React from "react";
import { ImageBackground, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLogoIcon from "../../svgIcons/AppLogo";
import ArrowIcon from "../../svgIcons/arrow";

const OptionsScreen = () => {
    return (
        <SafeAreaView style={styles.area}>
            <ImageBackground style={styles.back} source={require("./assets/images/Background.png")} >
                <View style={styles.view}>

                    <View style={styles.logo}>
                        <AppLogoIcon />
                    </View>

                    <View style={styles.men}>
                        <Image source={require("./assets/images/man1.png")} />
                        <Image source={require("./assets/images/man2.png")} />
                    </View>

                    <View style={styles.loginBox}>
                        <Text style={styles.logOrSign}>Login or Sign Up</Text>

                        <Text style={styles.description}>
                            {"   Login or create an account to take\nquiz, take part in challenge, and more"}
                        </Text>

                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.textLogin}>Login</Text>
                            <View style={{ position: "absolute", right: 14 }}>
                                <ArrowIcon color={"white"} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.createButton}>
                            <Text style={styles.textCreate}>Create account</Text>
                            <View style={{ position: "absolute", right: 10 }}>
                                <ArrowIcon color={"#6A5AE0"} />

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default OptionsScreen;

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#6A5AE0"
    },
    back: {
        flex: 1,
        resizeMode: "cover",
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        marginBottom: 10,
    },
    men: {
        flexDirection: "row",
        marginVertical: 30,
    },
    loginBox: {
        height: 300,
        width: 380,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        marginTop: 60,
        padding: 20,
    },
    logOrSign: {
        fontSize: 26,
        fontWeight: "500",
        color: "#001833",
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        fontWeight: "400",
        color: "#858494",
        textAlign: "center",
        marginBottom: 20,
    },
    loginButton: {
        flexDirection: "row",
        backgroundColor: "#6A5AE0",
        borderRadius: 10,
        width: 350,
        height: 65,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
    },
    createButton: {
        flexDirection: "row",
        backgroundColor: "#EFEEFC",
        borderRadius: 10,
        width: 350,
        height: 65,
        justifyContent: "center",
        alignItems: "center",
    },

    textLogin: {
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 20,
        color: "white"
    },
    textCreate: {
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 20,
        color: "#6A5AE0"

    }
});