import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import PlayButton from "AppComponents/Navigation/PlayButton";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles}>
        <ImageBackground
          source={require("./assets/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            source={require("./assets/logo.png")}
            style={imageStyle.logo}
          />
          <br />
          <PlayButton />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

const imageStyle = StyleSheet.create({
  logo: {
    alignItems: "center"
  }
});
