<<<<<<< HEAD
import React from "react";
import { Image, SafeAreaView, View } from "react-native";
function App(){
    return(
        <SafeAreaView style={{backgroundColor:"#6A5AE0",flex:1}}>
            <View>
                <View style={{flexDirection:"row"}}>
                <Image style={{margin:100,marginLeft:80}} source={require("./assets/icons/Oval.png")}/>
                <Image style={{}} source={require("./assets/icons/Group8.png")}/>
            </View>

           <View style={{alignItems:"center",marginTop:-90}}>
            <Image style={{}} source={require("./assets/icons/AppLogo.png")}/>
           </View>

            <View style={{flexDirection:"row",marginTop:86}}>
            <Image source={require("./assets/icons/Group7.png")}/>
            <Image style={{margin:100,marginTop:100}} source={require("./assets/icons/Oval1.png")}/>
            </View>
            </View>
            
        </SafeAreaView>
    )
}
export default App

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

// function App() {
//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: "#6A5AE0" }}>
//             <View style={{ flexDirection: "row" }}>
//                 <Image style={{ marginTop: 222, margin: 110, marginLeft: 70 }} source={require("./assets/icons/Oval.png")} />
//                 <Image source={require("./assets/icons/Group8.png")} />
//             </View>
//             <View style={{ flexDirection: "row", marginTop: 130 }}>
//                 <Image source={require("./assets/icons/Group7.png")} />
//                 <Image style={{ margin: 120 }} source={require("./assets/icons/Oval1.png")} />
//             </View>
//             < View style={{ marginTop: -780, flexDirection: "column" }}>
//                 <Image style={{ marginLeft: 170, width: 70, height: 120 }} source={require("./assets/icons/AppLogo.png")} />
//                 <View style={{ flexDirection: "row", marginLeft: 25 }}>
//                     <Image source={require("./assets/images/man1.png")} />-+
//                     <Image source={require("./assets/images/man2.png")} />
//                 </View>
//                 <View style={{ backgroundColor: "white", borderRadius: 15, height: 300, marginTop: 80, marginHorizontal: 15, alignItems: "center" }}>
//                     <View style={{ margin: 14 }}>
//                         <Text style={{ fontWeight: "500", color: "#001833", fontSize: 30 }}>
//                             Login or Sign up
//                         </Text>
//                     </View>
//                     <View>
//                         <Text style={{ fontWeight: "400", color: "#858494", fontSize: 18 }}>
//                             {" Login or create an account to take\nquiz, take part in challenge, and more."}
//                         </Text>
//                     </View>
//                     <TouchableOpacity>
//                         <View style={{ borderRadius: 15, backgroundColor: "#6A5AE0", height: 70, width: 350, margin: 16, alignItems: "center", flexDirection: "row" }}>
//                             <View style={{ marginLeft: 140 }}>
//                                 <Text style={{ color: "white", fontWeight: "600", fontSize: 24 }}>
//                                     Login
//                                 </Text>
//                             </View>
//                             <View>
//                                 <Image style={{ marginLeft: 110 }} source={require("./assets/icons/arrow.png")} />
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <View style={{ borderRadius: 15, backgroundColor: "#EFEEFC", height: 70, width: 350, alignItems: "center", flexDirection: "row" }}>
//                             <View style={{marginLeft:80}}>
//                                 <Text style={{ color: "#6A5AE0", fontWeight: "600", fontSize: 24 }}>
//                                     Create account
//                                 </Text>
//                             </View>
//                             <View>
//                                 <Image style={{ tintColor: "#6A5AE0",marginLeft:70 }} source={require("./assets/icons/arrow.png")} />
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </View >
//         </SafeAreaView>
//     )
// }

// export default App


// // // ///////////////////////////////////////////////////////////
// import React from "react";
// import { Image, SafeAreaView, View } from "react-native";
// function App(){
//     return(
//         <SafeAreaView style={{backgroundColor:"#6A5AE0",flex:1}}>
//             <View>
//                 <View style={{flexDirection:"row"}}>
//                 <Image style={{margin:100,marginLeft:80}} source={require("./assets/icons/Oval.png")}/>
//                 <Image style={{}} source={require("./assets/icons/Group8.png")}/>
//             </View>

//            <View style={{alignItems:"center",marginTop:-90}}>
//             <Image style={{}} source={require("./assets/icons/AppLogo.png")}/>
//            </View>

//             <View style={{flexDirection:"row",marginTop:86}}>
//             <Image source={require("./assets/icons/Group7.png")}/>
//             <Image style={{margin:100,marginTop:100}} source={require("./assets/icons/Oval1.png")}/>
//             </View>
//             </View>
            
//         </SafeAreaView>
//     )
// }
// export default App



=======
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './navigation/RootNavigation';
export function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
export default App;
>>>>>>> fd29d4ff52c4546957a73a99c6388161f3372b97
