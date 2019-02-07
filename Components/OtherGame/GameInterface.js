import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class GameInterface extends Component {
  renderIcon = (row, column) => {
    var value = this.props.gameState[row][column];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />; // Player 1
      case -1:
        return <Icon name="circle-outline" style={styles.tileO} />; // Player -1
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
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 1)}
            style={[styles.tile, { borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(0, 2)}
            style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(1, 0)}
            style={[styles.tile, { borderLeftWidth: 0 }]}
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
            style={[styles.tile, { borderRightWidth: 0 }]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 0)}
            style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 1)}
            style={[styles.tile, { borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handlePress(2, 2)}
            style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]}
          >
            {this.renderIcon(2, 2)}
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
    borderWidth: 5,
    width: 100,
    height: 100
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
