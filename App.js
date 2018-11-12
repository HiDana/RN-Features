import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";

import SwiperScreen from "./screens/Swiper/Swiper";
import MainPageScreen from "./screens/MainPage/MainPage";

const App = createStackNavigator({
  MainPage: { screen: MainPageScreen },
  Swiper: { screen: SwiperScreen }
  // Profile: { screen: ProfileScreen }
});

export default App;

// export default class App extends React.Component {
//   _toSwiper() {
//     console.log("click");
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this._toSwiper}>
//           <Text>swiper</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
