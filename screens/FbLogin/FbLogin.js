import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default class Fblogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: null
    };
  }

  async logInFB() {
    const {
      type,
      token
    } = await Expo.Facebook.logInWithReadPermissionsAsync("1742523045835972", {
      permissions: ["public_profile"]
    });
    console.log("type", type);
    console.log("token", token);
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture`
      );
      this.setState({ res: await response.json() });
      console.log("response", response);
      // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    }
  }

  render() {
    const { res } = this.state;
    console.log("res", res);

    return (
      <View style={styles.container}>
        <Button onPress={this.logInFB.bind(this)} title="connect with fb" />

        {res === null
          ? null
          : <View>
              <Text>name: {res.name}</Text>
              <Text>ID: {res.id}</Text>
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: `${res.picture.data.url}`
                }}
              />
            </View>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
