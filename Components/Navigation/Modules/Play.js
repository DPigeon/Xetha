import React from "react"; // PureComponent does the ComponentShouldUpdate automatically
import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import Box from "../Game/Box.js";
import Physics from "../Game/Physics";

const { width, height } = Dimensions.get("screen");
const boxSize = Math.trunc(Math.max(width, height) * 0.075);
const initialBox = Matter.Bodies.rectangle(
  width / 2,
  height / 2,
  boxSize,
  boxSize
);
const floor = Matter.Bodies.rectangle(
  width / 2,
  height - boxSize / 2,
  width,
  boxSize,
  { isStatic: true }
); // static: object moves or not
const engine = Matter.Engine.create({ enableSleeping: false }); // Creates new physics engine
const world = engine.world; // Creates a world that contains all simulated bodies & contraints
Matter.World.add(world, [initialBox, floor]); // Add the items to the world

/* Touching to Create Boxes*/
let boxIds = 0;
const CreateBox = (entities, { touches, screen }) => {
  let world = entities["physics"].world;
  let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075);
  touches
    .filter(t => t.type === "press")
    .forEach(t => {
      let body = Matter.Bodies.rectangle(
        t.event.pageX,
        t.event.pageY,
        boxSize,
        boxSize,
        { frictionAir: 0.021, restitution: 1.0 } // Restitution: defines elasticity (bouncing)
      );
      Matter.World.add(world, [body]);
      entities[++boxIds] = {
        body: body,
        size: [boxSize, boxSize],
        color: boxIds % 2 == 0 ? "pink" : "#B8E986",
        renderer: Box
      };
    });
  return entities;
};

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
    backgroundColor: "#fff"
  }
});
