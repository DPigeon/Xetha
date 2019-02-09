import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PlayButton from "./Components/Navigation/Buttons/PlayButton.js";
import SettingsButton from "./Components/Navigation/Buttons/SettingsButton.js";
import AboutButton from "./Components/Navigation/Buttons/AboutButton.js";
import GameButton from "./Components/Navigation/Buttons/GameButton.js";
import Settings from "./Components/Navigation/Modules/Settings.js";
import About from "./Components/Navigation/Modules/About.js";
import Play from "./Components/Navigation/Modules/Play.js";
import GamePlay from "./Components/OtherGame/GamePlay.js";
import StartAnimation from "./Components/StartAnimation";

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
          <StartAnimation
            source={require("./assets/logo.png")}
            style={imageStyle.logo}
          />
          <PlayButton navigate={() => navigate("PlayBeta")} />
          <GameButton navigate={() => navigate("Play")} />
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
  PlayBeta: Play,
  Play: GamePlay
});

export default createAppContainer(AppNavigator);
