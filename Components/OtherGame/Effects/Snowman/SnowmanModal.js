import React, { PureComponent } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  Text
} from "react-native";

class SnowmanModal extends PureComponent {
  state = { tap: 0, randomNumber: Math.max(5, 10) };
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

  handleRequestClose = () => {
    Alert.alert("Don't just leave like that, fool...");
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.snowmanState}
          onRequestClose={() => this.handleRequestClose()}
        >
          <Image
            source={require("../../../../assets/snowmanBg.png")}
            style={styles.snowmanContainer}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleButtonPress()}
          >
            <Text style={styles.textButton}>Melt Taps: {this.state.tap}</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

export default SnowmanModal;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  snowmanContainer: {
    position: "absolute"
  },
  button: {
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    left: 20
  },
  textButton: {
    backgroundColor: "#33BBFF",
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
