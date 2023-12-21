// import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {RootNavigation} from './navigation/RootNavigation';

// export function App() {
//   return (
//     <SafeAreaProvider>
//       <RootNavigation />
//     </SafeAreaProvider>
//   );
// }
// export default App;

import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import AppLogoIcon from "./svgIcons/AppLogo";

function App() {
    return (
        <SafeAreaView style={styles.area}>
            <ImageBackground style={styles.back} source={require("./assets/images/background.png")}>
                <View style={styles.logo}>
                    <AppLogoIcon />
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}
export default App


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
