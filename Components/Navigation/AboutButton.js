import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class PlayButton extends Component {
  state = {};

  aboutGame = () => {};

  render() {
    return (
      <View style={buttonStyles.Container}>
        <TouchableOpacity onPress={() => this.aboutGame()}>
          <Text style={buttonStyles.Button}>About</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const buttonStyles = StyleSheet.create({
  Container: {
    position: "relative",
    bottom: -325,
    width: "90%",
    left: 18
  },
  Button: {
    backgroundColor: "#2d594d",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  }
});
