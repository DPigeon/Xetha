import React, { Component } from "react";
import { Text, Alert, View, StyleSheet, TouchableOpacity } from "react-native";
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
    // Player is set to 1 to begin
    this.setState({ gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], player: 1 });
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
    var value = this.state.gameState[row][column];
    if (value !== 0) return; // No touching same tile

    var player = this.state.player;
    var array = this.state.gameState.slice();
    array[row][column] = player;
    this.setState({ gameState: array });
    // For other player
    var nextPlayer = player == 1 ? -1 : 1;
    this.setState({ player: nextPlayer });

    // Checks if there is a winner
    var winner = this.gameWinner();
    console.log(winner);
    if (winner === 1) {
      Alert.alert("Player 1 won !");
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert("Player 2 won !");
      this.initializeGame();
    }
  };

  gameWinner() {
    const tiles = 3;
    var array = this.state.gameState;
    var sum;

    for (var i = 0; i < tiles; i++) {
      sum = array[i][0] + array[i][1] + array[i][2];
      // if the sum is 3, player 1 won
      if (sum == 3) return 1;
      // if the sum is -3, player 2 won
      else if (sum == -3) return -1;
    }

    for (var i = 0; i < tiles; i++) {
      sum = array[0][i] + array[1][i] + array[2][i];
      if (sum == 3) return 1;
      else if (sum == -3) return -1;
    }

    sum = array[0][0] + array[1][1] + array[2][2];
    if (sum == 3) return 1;
    else if (sum == -3) return -1;

    sum = array[2][0] + array[1][1] + array[0][2];
    if (sum == 3) return 1;
    else if (sum == -3) return -1;

    return 0;
  }

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
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <TouchableOpacity onPress={() => this.initializeGame()}>
          <Text style={styles.Button}>New Game</Text>
        </TouchableOpacity>
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
