import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class GameInterface extends Component {
  renderIcon = (row, column) => {
    var value = this.props.gameState[row][column];
    switch (value) {
      case 1:
        return <Icon name="circle-outline" style={styles.tileO} />; // Player
      case -1:
        return <Icon name="close" style={styles.tileX} />; // Enemy
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

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <TouchableOpacity onPress={() => this.props.initializeGame()}>
          <Text style={styles.Button}>New Game</Text>
        </TouchableOpacity>
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
  tileX: {
    color: "red",
    fontSize: 60
  },
  tileO: {
    color: "lime",
    fontSize: 60
  },
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
