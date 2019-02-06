import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

class SettingsButton extends Component {
  render() {
    return (
      <View style={buttonStyles.Container}>
        <TouchableOpacity onPress={this.props.navigate}>
          <Text style={buttonStyles.Button}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const buttonStyles = StyleSheet.create({
  Container: {
    position: "relative",
    bottom: -275,
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

export default SettingsButton;
