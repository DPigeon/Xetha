import React, { Component } from "react";
import { Alert, StyleSheet, View } from "react-native";
import GameInterface from "./GameInterface";

/* Global Variables */
let interval;
let intervalTime = 2000; // 2 Seconds interval between spawns (make it random later ?)

class GamePlay extends Component {
  static navigationOptions = {
    title: "Yo You Gonna Lose..." // Change title according to what player does later (you suck, you an do better, ect)
  };

  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
      ], // The board: first number is value, second is the icon, [0, 1, ...]
      player: 1, // Player 1: 1, Enemy (Game): -1
      gameRestarted: false,
      points: 0,
      taps: [],
      snowFlakesModal: false,
      snowmanModal: false,
      duckModal: false
    };
  }

  componentDidMount() {
    this.initializeGame(); // Begin game
    interval = setInterval(() => {
      this.spawnRandom(
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5)
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
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
      ],
      player: 1,
      gameRestarted: true,
      points: 0,
      taps: []
    });
  };

  updateGame(gameState) {
    var array = gameState.slice();
    this.setState({ gameState: array });
  }

  tap = () => {
    let points = this.state.points;
    let taps = this.state.taps;
    points++;
    taps.push(points); // Array to keep track of points
    this.setState({ points });
  };

  handlePress = (row, column) => {
    var value = this.state.gameState[row][column][0];
    var iconValue = this.state.gameState[row][column][1];
    if (value === -1 && iconValue === 1) {
      // Ghost
      this.tap();
      Alert.alert("You killed a ghost..."); // Ok this works
    }
    if (value === -1 && iconValue === 2) {
      // Duck minigame
      this.tap();
      this.duckMiniGame();
    }
    if (value === -1 && iconValue === 3) {
      // Snowman
      this.tap();
      this.snowmanMiniGame();
    }
    if (value === -1 && iconValue === 6) {
      // Duck
      this.tap();
      this.snowFlakes();
    }

    if (value === -1) var player = this.state.player;

    // Updates but with the player too
    var array = this.state.gameState.slice();
    array[row][column][0] = player;
    this.setState({ gameState: array });

    // Checks if there is a winner
    /*var winner = this.gameWinner();
    if (winner === 1) {
      Alert.alert("X's won !");
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert("O's won !");
      this.initializeGame();
    }*/
  };

  /* Minigames */

  snowFlakes = () => {
    this.setState({
      snowFlakesModal: !this.state.snowFlakesModal
    });
  };

  duckMinigame = () => {
    this.setState({
      duckModal: !this.state.duckModal
    });
  };

  snowmanMinigame = () => {
    this.setState({
      snowmanModal: !this.state.snowmanModal
    });
  };

  spawnRandom(row, column) {
    var enemyTile = -1;
    this.state.gameState[row][column][0] = enemyTile; // Setting the tile to the game (enemy)
    this.updateGame(this.state.gameState);
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
        points={this.state.points}
        taps={this.state.taps}
        snowflakesState={this.state.snowFlakesModal}
        setSnowFlakesModal={this.snowFlakes}
        duckState={this.state.duckModal}
        duckModal={this.duckMinigame}
        snowmanState={this.state.snowmanModal}
        snowmanModal={this.snowmanMinigame}
      />
    );
  }
}

export default GamePlay;
