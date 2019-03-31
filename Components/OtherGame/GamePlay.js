import React, { Component } from "react";
import GameInterface from "./GameInterface";

/* Global Variables */
let interval;
let intervalTime = 2000; // 2 Seconds interval between spawns (make it random later ?)

class GamePlay extends Component {
  static navigationOptions = {
    title: "You Gonna Lose..." // Change title according to what player does later (you suck, you an do better, ect)
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
    }
    if (value === -1 && iconValue === 2) {
      // Duck minigame
      this.tap();
      this.handleMinigameModal("duckModal", this.state.duckModal);
    }
    if (value === -1 && iconValue === 3) {
      // Snowman
      this.tap();
      this.handleMinigameModal("snowmanModal", this.state.snowmanModal);
    }
    if (value === -1 && iconValue === 4) {
      // multi-touch
      this.tap();
    }
    if (value === -1 && iconValue === 5) {
      // Target
      this.tap();
    }
    if (value === -1 && iconValue === 6) {
      // Snowflake
      this.tap();
      this.handleMinigameModal("snowFlakesModal", this.state.snowFlakesModal);
    }
    if (value === -1 && iconValue === 7) {
      // Flash could do a big animated flash
      this.tap();
    }
    if (value === -1 && iconValue === 8) {
      // Wii
      this.tap();
    }

    if (value === -1) var player = this.state.player;

    // Updates but with the player too
    var array = this.state.gameState.slice();
    array[row][column][0] = player;
    this.setState({ gameState: array });
  };

  /* Minigame Handlers */

  // When tapping
  handleMinigameModal = (name, state) => {
    this.setState({
      [name]: !state
    });
  };

  // When sending the function
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

  render() {
    return (
      <GameInterface
        gameState={this.state.gameState}
        handlePress={this.handlePress}
        initializeGame={this.initializeGame}
        points={this.state.points}
        taps={this.state.taps}
        // Minigame settings
        snowflakesState={this.state.snowFlakesModal}
        setSnowflakesModal={() => this.snowFlakes}
        duckState={this.state.duckModal}
        duckModal={() => this.duckMinigame()}
        snowmanState={this.state.snowmanModal}
        snowmanModal={() => this.snowmanMinigame}
      />
    );
  }
}

export default GamePlay;
