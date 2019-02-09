import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import PointsBubble from "./PointsBubble";

class PointsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      taps: []
    };
  }

  tap = () => {
    let points = this.state.points;
    let taps = this.state.taps;
    points++;
    taps.push(points); // Array to keep track of points
    this.setState({ points });
  };

  renderTaps() {
    return this.state.taps.map((point, id) => (
      <PointsBubble key={id} points={point} />
    ));
  }

  animationComplete(tapNum) {
    taps = this.state.taps;
    taps.splice(taps.indexOf(tapNum), 1);
    this.setState({ taps });
  }

  render() {
    let pointIcon =
      this.state.points > 0 ? (
        <Icon name="arrow-collapse-up" style={styles.iconPoints} />
      ) : (
        <Icon name="arrow-expand-up" style={styles.iconPoints} />
      );
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => this.tap()}
          activeOpacity={0.7}
          style={styles.pointsButton}
        >
          {pointIcon}
        </TouchableOpacity>
        {this.renderTaps()}
      </View>
    );
  }
}

export default PointsButton;

const styles = StyleSheet.create({
  pointsButton: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#2d594d",
    bottom: 15,
    right: -165,
    elevation: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  iconPoints: {
    color: "white",
    fontSize: 25
  }
});
