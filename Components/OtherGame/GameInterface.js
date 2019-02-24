import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import PointsButton from "./PointsButton";

class GameInterface extends Component {
  renderIcon = (row, column) => {
    var value = this.props.gameState[row][column];
    var randomIcon = Math.floor(Math.random() * 8);
    switch (value) {
      case 1:
        return <View />; // Player
      case -1:
        switch (randomIcon) {
          case 0:
            // Monster 1:
            return <Icon name="ghost" style={styles.tileGhost} />;
          case 1:
            // Monster 2:
            return <Icon name="duck" style={styles.tileDuck} />;
          case 2:
            // Monster 3:
            return <Icon name="snowman" style={styles.tileSnowman} />;
          case 3:
            // Multi-touch
            return <Icon name="gesture-spread" style={styles.tileMultitouch} />;
          case 4:
            // Target:
            return <Icon name="crosshairs-gps" style={styles.tileTarget} />;
          case 5:
            // Snowflake
            return <Icon name="snowflake" style={styles.tileSnowflake} />;
          case 6:
            //Energy
            return <Icon name="flash" style={styles.tileEnergy} />;
          case 7:
            // Wii (Just kidding keep on playing HAHA)
            return <Icon name="wii" style={styles.tileWii} />;
          default:
            <View />;
        }
      default:
        return <View />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Row 1 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 0)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 2)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 3)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(0, 3)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 4)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(0, 4)}
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(1, 0)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(1, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(1, 2)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.handlePress(1, 3)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 3)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(1, 4)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 4)}
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 0)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 2)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 3)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(2, 3)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 4)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(2, 4)}
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(3, 0)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(3, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(3, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(3, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(3, 2)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(3, 2)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.handlePress(3, 3)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(3, 3)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(3, 4)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(3, 4)}
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(4, 0)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(4, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(4, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(4, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(4, 2)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(4, 2)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.handlePress(4, 3)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(4, 3)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(4, 4)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(4, 4)}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.ButtonPosition}
          onPress={() => this.props.initializeGame()}
        >
          <Text style={styles.Button}>New Game</Text>
        </TouchableOpacity>
        <PointsButton points={this.props.points} taps={this.props.taps} />
      </View>
    );
  }
}

export default GameInterface;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tile: {
    borderWidth: 1,
    width: 65,
    height: 65
  },
  tileGhost: {
    color: "brown",
    fontSize: 60
  },
  tileDuck: {
    color: "purple",
    fontSize: 60
  },
  tileSnowman: {
    color: "blue",
    fontSize: 60
  },
  tileMultitouch: {
    color: "gray",
    fontSize: 60
  },
  tileTarget: {
    color: "red",
    fontSize: 60
  },
  tileSnowflake: {
    color: "cyan",
    fontSize: 60
  },
  tileEnergy: {
    color: "red",
    fontSize: 60
  },
  tileWii: {
    color: "lime",
    fontSize: 60
  },
  Button: {
    backgroundColor: "#2d594d",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  ButtonPosition: {
    bottom: -123,
    right: 0
  }
});
