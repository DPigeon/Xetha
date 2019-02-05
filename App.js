import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PlayButton from "./Components/Navigation/PlayButton.js";
import SettingsButton from "./Components/Navigation/SettingsButton.js";
import AboutButton from "./Components/Navigation/AboutButton.js";
import Settings from "./Components/Navigation/Modules/Settings.js";
import About from "./Components/Navigation/Modules/About";
import Play from "./Components/Navigation/Modules/Play";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Xetha",
    header: null // Puts white bar away
  };
  render() {
    const { navigate } = this.props.navigation;
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
          <PlayButton navigate={() => navigate("Play")} />
          <SettingsButton navigate={() => navigate("Settings")} />
          <AboutButton navigate={() => navigate("About")} />
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

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Settings: Settings,
  About: About,
  Play: Play
});

export default createAppContainer(AppNavigator);
