import Matter from "matter-js";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
export const boxSize = Math.trunc(Math.max(width, height) * 0.075);
export const initialBox = Matter.Bodies.rectangle(
  width / 2,
  height / 2,
  boxSize,
  boxSize
);
export const floor = Matter.Bodies.rectangle(
  width / 2,
  height - boxSize / 2,
  width,
  boxSize,
  { isStatic: true }
); // static: object moves or not
export const engine = Matter.Engine.create({ enableSleeping: false }); // Creates new physics engine
export const world = engine.world; // Creates a world that contains all simulated bodies & contraints

export default engine;
