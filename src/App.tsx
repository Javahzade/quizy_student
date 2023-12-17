import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function App() {
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.view}>
                <View>
                    <Image style={styles.logo} source={require("./assets/icons/AppLogo.png")} />
                </View>
                <View style={styles.men}>
                    <Image source={require("./assets/images/man1.png")} />
                    <Image source={require("./assets/images/man2.png")} />
                </View>
                <View style={styles.back}>
                    <Image style={{ width: 410, height: 900 }} source={require("./assets/images/Background.png")} />
                </View>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.logOrSign}>
                            Login or Sign Up
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.textDescription}>
                            {"   Login or create an account to take\nquiz, take part in challenge, and more"}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.buttonLogin}>
                            <View>
                                <Text style={styles.textLogin}>
                                    Login
                                </Text>
                            </View>
                            <View>
                                <Image source={require("./assets/icons/arrow.png")} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonCreate}>
                            <View>
                                <Text style={styles.textCreate}>
                                    Create account
                                </Text>
                            </View>
                            <View>
                                <Image style={{ tintColor: "#6A5AE0" }} source={require("./assets/icons/arrow.png")} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



            </View>

        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#6A5AE0"
    },
    view: {
        alignItems: "center",
        marginTop: 30
    },
    logo: {
        height: 100,
        width: 70
    },
    men: {
        flexDirection: "row",
        marginVertical: 30
    },
    back: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    box: {
        height: 300,
        width: 380,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        marginTop: 60
    },
    logOrSign: {
        fontSize: 26,
        fontWeight: "500",
        color: "#001833",
        margin: 16
    },
    textDescription: {
        fontSize: 18,
        fontWeight: "400",
        color: "#858494"
    },
    buttonLogin: {
        flexDirection: "row",
        backgroundColor: "#6A5AE0",
        borderRadius: 10,
        width: 350,
        height: 65,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16
    },
    textLogin: {
        fontSize: 18,
        color: "white",
        fontWeight: "600",
        marginHorizontal: 120
    },
    buttonCreate: {
        flexDirection: "row",
        backgroundColor: "#EFEEFC",
        borderRadius: 10,
        width: 350,
        height: 65,
        justifyContent: "center",
        alignItems: "center"
    },
    textCreate: {
        fontSize: 18,
        color: "#6A5AE0",
        fontWeight: "600",
        marginHorizontal: 80
    }

}) 