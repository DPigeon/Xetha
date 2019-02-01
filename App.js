import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Image
} from "react-native";
import PlayButton from "./Components/Navigation/PlayButton.js";
import SettingsButton from "./Components/Navigation/SettingsButton.js";
import AboutButton from "./Components/Navigation/AboutButton.js";

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
          <PlayButton />
          <SettingsButton />
          <AboutButton />
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
    alignItems: "center",
    position: "absolute",
    bottom: 400,
    left: -18
  }
});
