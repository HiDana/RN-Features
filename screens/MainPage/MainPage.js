import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Swiper" onPress={() => navigate("Swiper")} />
      </View>
    );
  }
}
