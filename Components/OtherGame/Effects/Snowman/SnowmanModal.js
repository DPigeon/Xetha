import React, { PureComponent } from "react";
import { Modal, View, Button, Alert, Image } from "react-native";

class MinigameModal extends PureComponent {
  state = { tap: 0, randomNumber: Math.max(5, 30) };
  // Minigame: tap the snowman to create heat to melt it (from 5 to 30 random taps)
  // Make background black

  handleTap = () => {
    this.setState({ tap: this.state.tap + 1 });
  };

  handleButtonPress = () => {
    let { tap, randomNumber } = this.state;
    this.handleTap();

    if (tap === randomNumber) {
      Alert.alert("Woahh, you melted the mean Snowman !");
      this.props.snowmanModal(); // Resets modal
      this.setState({ tap: 0 }); // Reset taps;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.snowmanState}
        >
          <Image
            source={require("../../../../assets/snowmanBg.png")}
            style={styles.snowmanContainer}
          />
          <Button onPress={this.handleButtonPress()}>
            Melt Taps: {this.state.tap}
          </Button>
        </Modal>
      </View>
    );
  }
}

export default MinigameModal;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  snowmanContainer: {
    position: "absolute"
  }
});
