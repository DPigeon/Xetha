import Matter from "matter-js";

const Physics = (entities, { time }) => {
  // Object of entities and a timer to it
  let engine = entities["physics"].engine;
  Matter.Engine.update(engine, time.delta); // Updates local variable every delta change
  return entities;
};

export default Physics;
