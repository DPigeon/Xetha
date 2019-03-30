import React, { Component } from "react";
import { Animated, Text, StyleSheet } from "react-native";

class PointsBubble extends Component {
  constructor() {
    super();
    this.state = {
      yPosition: new Animated.Value(0),
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    // Parallel starts animations at same time
    Animated.parallel([
      Animated.timing(this.state.yPosition, {
        toValue: -100, // Goes to the top
        duration: 500
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500
      })
    ]).start(() => {
      setTimeout(() => {
        this.props.animationComplete(this.props.points);
      }, 1000);
    });
  }

  render() {
    let animationStyle = {
      transform: [{ translateY: this.state.yPosition }],
      opacity: this.state.opacity
    };
    return (
      <Animated.View style={[styles.pointsBubble, animationStyle]}>
        <Text style={styles.pointsText}>{this.props.points} !</Text>
      </Animated.View>
    );
  }
}

export default PointsBubble;

const styles = StyleSheet.create({
  pointsBubble: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#0b2720",
    right: -165,
    alignItems: "center",
    justifyContent: "center"
  },
  pointsText: {
    color: "white",
    fontSize: 15
  }
});
