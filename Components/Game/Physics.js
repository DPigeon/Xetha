import Matter from "matter-js";
import Box from "./Box.js";

const Physics = (entities, { time }) => {
  // Object of entities and a timer to it
  let engine = entities["physics"].engine;
  Matter.Engine.update(engine, time.delta); // Updates local variable every delta change
  return entities;
};

/* Touching to Create Boxes*/
let boxIds = 0;
export const CreateBox = (entities, { touches, screen }) => {
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
        { frictionAir: 0.021, restitution: 0.5 } // Restitution: defines elasticity (bouncing)
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

export default Physics;
