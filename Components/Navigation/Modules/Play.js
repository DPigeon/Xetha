import React from "react";
import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import Box from "../../Game/Box.js";
import Physics, { CreateBox } from "../../Game/Physics.js";
import {
  boxSize,
  initialBox,
  floor,
  engine,
  world
} from "../../Game/Entities.js";

const { width, height } = Dimensions.get("screen");
Matter.World.add(world, [initialBox, floor]); // Add the items to the world

export default class Play extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[Physics, CreateBox]}
        entities={{
          physics: {
            engine: engine,
            world: world
          },
          initialBox: {
            body: initialBox,
            size: [boxSize, boxSize],
            color: "blue",
            renderer: Box
          },
          floor: {
            body: floor,
            size: [width, boxSize],
            color: "green",
            renderer: Box
          }
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  }
});
