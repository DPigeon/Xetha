import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Difficulty:</Text>
        <TouchableOpacity>
          <Text style={buttonStyles.Button}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={buttonStyles.Button}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={buttonStyles.Button}>Hard</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Settings;

const buttonStyles = StyleSheet.create({
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
