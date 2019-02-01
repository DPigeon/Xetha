import React, { Component } from "react";
import { View, Button } from "react-native";

export default class PlayButton extends Component {
  state = {};

  startGame = () => {};

  render() {
    return (
      <View>
        <Button title="Play Xetha" onPress={() => this.startGame()} />
      </View>
    );
  }
}
