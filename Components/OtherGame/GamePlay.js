import React, { Component } from "react";
import { Alert, StyleSheet } from "react-native";
import GameInterface from "./GameInterface";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class GamePlay extends Component {
  static navigationOptions = {
    title: "Tic Tac Toe"
  };

  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ], // The board this.state
      player: 1 // Player 1: 1, Player 2: -1
    };
  }

  componentDidMount() {
    this.initializeGame(); // Begin game
  }

  initializeGame = () => {
    // Player is set to 1 to begin
    this.setState({
      gameState: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      player: 1
    });
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
    if (winner === 1) {
      Alert.alert("X's won !");
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert("O's won !");
      this.initializeGame();
    }
  };

  spawnRamdom() {
    var randomX = random(0, 4);
    var randomY = random(0, 4);

    // Monster 1:
    <Icon name="ghost" style={styles.tileGhost} />;

    // Monster 2:
    <Icon name="space-invaders" style={styles.tileSpace} />;

    // Monster 3:
    <Icon name="snowman" style={styles.tileSnowman} />;

    // Multi-touch
    <Icon name="gesture-spread" style={styles.tileMultitouch} />;

    // Target:
    <Icon name="crosshairs-gps" style={styles.tileTarget} />;

    // Snowflake
    <Icon name="snowflake" style={styles.tileSnowflake} />;

    //Boxing Glove
    <Icon name="boxing-glove" style={styles.tileBoxing} />;

    // Wii (Just kidding keep on playing HAHA)
    <Icon name="wii" style={styles.tileWii} />;
  }

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
    // If all tiles are not empty, return 2 (end the game)
    for (var i = 0; i < tiles; i++) {
      for (var j = 0; j < tiles; j++) {}
    }
    return 0;
  }

  render() {
    return (
      <GameInterface
        gameState={this.state.gameState}
        handlePress={this.handlePress}
        initializeGame={this.initializeGame}
      />
    );
  }
}

export default GamePlay;

const styles = StyleSheet.create({
  tileGhost: {
    color: "brown",
    fontSize: 60
  },
  tileSpace: {
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
  tileBoxing: {
    color: "red",
    fontSize: 60
  },
  tileWii: {
    color: "lime",
    fontSize: 60
  }
});
