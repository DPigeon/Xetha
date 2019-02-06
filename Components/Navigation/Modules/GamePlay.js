import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class GamePlay extends Component {
  static navigationOptions = {
    title: "Tic Tac Toe"
  };

  constructor(props) {
    super(props);
    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], // The board this.state
      player: 1 // Player 1: 1, Player 2: -1
    };
  }

  componentDidMount() {
    this.initializeGame(); // Begin game
  }

  initializeGame = () => {
    this.setState({ gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] });
  };

  renderIcon = (row, column) => {
    var value = this.state.gameState[row][column];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />; // Player 1
      case -1:
        return <Icon name="circle-outline" style={styles.tileO} />; // Player -1
      default:
        return <View />;
    }
  };

  handlePress = (row, column) => {
    const value = this.state.gameState[row][column];
    if (value !== 0) return; // No touching same tile

    const player = this.state.player;
    const array = this.state.gameState.slice();
    array[row][column] = player;
    this.setState({ gameState: array });
    // For other player
    const nextPlayer = player === 1 ? -1 : 1;
    this.setState({ player: nextPlayer });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Row 1 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.handlePress(0, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handlePress(0, 1)}
            style={[styles.tile, { borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handlePress(0, 2)}
            style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.handlePress(1, 0)}
            style={[styles.tile, { borderLeftWidth: 0 }]}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handlePress(1, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handlePress(1, 2)}
            style={[styles.tile, { borderRightWidth: 0 }]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.handlePress(2, 0)}
            style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handlePress(2, 1)}
            style={[styles.tile, { borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handlePress(2, 2)}
            style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GamePlay;

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
  }
});
