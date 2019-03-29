import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class About extends Component {
  render() {
    return (
      <View>
        <Text>This game has been made with React Native</Text>
        <Text>Created by David (DPigeon) for fun</Text>
        <TouchableOpacity>
          <Text style={buttonStyles.Button}>Website</Text>
        </TouchableOpacity>
        <Text>Feedback is greatly appreciated !</Text>
      </View>
    );
  }
}

export default About;

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
