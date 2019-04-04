import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import PointsButton from "./PointsButton";
import SnowflakesAnimated from "./Effects/Snowflakes/Animated";
import DuckMinigame from "./Effects/Duck/DuckModal";
import SnowmanMinigame from "./Effects/Snowman/SnowmanModal";
import FlashMinigame from "./Effects/Flash/FlashModal";
import styles from "./StyleSheetInterface";

class GameInterface extends PureComponent {
  renderIcon = (row, column) => {
    var value = this.props.gameState[row][column][0];
    var randomIcon = Math.floor(Math.random() * 9);
    this.props.gameState[row][column][1] = randomIcon;
    switch (value) {
      case 1:
        return <View />; // Player
      case -1:
        switch (randomIcon) {
          case 1:
            // Monster 1:
            return <Icon name="ghost" style={styles.tileGhost} />;
          case 2:
            // Monster 2:
            return <Icon name="duck" style={styles.tileDuck} />;
          case 3:
            // Monster 3:
            return <Icon name="snowman" style={styles.tileSnowman} />;
          case 4:
            // Multi-touch
            return <Icon name="gesture-spread" style={styles.tileMultitouch} />;
          case 5:
            // Target:
            return <Icon name="crosshairs-gps" style={styles.tileTarget} />;
          case 6:
            // Snowflake
            return <Icon name="snowflake" style={styles.tileSnowflake} />;
          case 7:
            //Energy
            return <Icon name="flash" style={styles.tileEnergy} />;
          case 8:
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
      <ImageBackground
        source={require("../../assets/gameplay.png")}
        style={styles.container}
      >
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
          <SnowflakesAnimated
            style={styles.minigameContainer}
            snowflakesState={this.props.snowflakesState}
            setSnowflakesModal={this.props.setSnowflakesModal}
          />

          <DuckMinigame
            style={styles.minigameContainer}
            duckState={this.props.duckState}
            duckModal={this.props.duckModal}
          />

          <SnowmanMinigame
            style={styles.minigameContainer}
            snowmanState={this.props.snowmanState}
            snowmanModal={this.props.snowmanModal}
          />

          <FlashMinigame
            style={styles.minigameContainer}
            flashState={this.props.flashState}
            flashModal={this.props.flashModal}
          />

          <PointsButton points={this.props.points} taps={this.props.taps} />
        </View>
      </ImageBackground>
    );
  }
}

export default GameInterface;
