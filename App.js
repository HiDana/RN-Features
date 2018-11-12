import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";

import SwiperScreen from "./screens/Swiper/Swiper";
import MainPageScreen from "./screens/MainPage/MainPage";
import FbLoginScreen from "./screens/FbLogin/FbLogin";

const App = createStackNavigator({
  MainPage: { screen: MainPageScreen },
  Swiper: { screen: SwiperScreen },
  FbLogin: { screen: FbLoginScreen }
});

export default App;
