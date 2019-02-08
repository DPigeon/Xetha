import React, { Component } from "react";
import { Alert, StyleSheet, View } from "react-native";
import GameInterface from "./GameInterface";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

/* Global Variables */
let interval;
let intervalTime = 2000; // 2 Seconds interval between spawns (make it random later ?)

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
      player: 1, // Player 1: 1, Enemy (Game): -1
      gameRestarted: false
    };
  }

  componentDidMount() {
    this.initializeGame(); // Begin game
    interval = setInterval(() => {
      this.spawnRandom(
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4)
      );
    }, intervalTime);
  }

  componentWillUnmount() {
    clearInterval(interval);
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
      player: 1,
      gameRestarted: true
    });
  };

  updateGame(gameState) {
    var array = gameState.slice();
    this.setState({ gameState: array });
  }

  handlePress = (row, column) => {
    var value = this.state.gameState[row][column];
    if (value !== 0) return; // No touching same tile
    var player = this.state.player;

    // Updates but with the player too
    var array = this.state.gameState.slice();
    array[row][column] = player;
    this.setState({ gameState: array });

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

  spawnRandom(row, column) {
    var enemyTile = -1;
    this.state.gameState[row][column] = enemyTile; // Setting the tile to the game (enemy)
    var randomIcon = Math.floor(Math.random() * 8);
    this.updateGame(this.state.gameState);
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
  }
});
