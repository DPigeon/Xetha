import React, { PureComponent } from "react";
import { Modal, View, Button, Alert, StyleSheet } from "react-native";

class MinigameModal extends PureComponent {
  state = {};
  // Minigame: you have 5 buttons and you have to guess which duck is the right 1 (add duck sound effect) 1/5 chances

  handleButtonPress = number => {
    const randomNumber = Math.max(1, 5);
    if (randomNumber === number) {
      Alert.alert("Oh, so you're good at guessing...");
      this.props.duckModal();
    } else {
      Alert.alert("Wrong...");
    }
  };

  handleRequestClose = () => {
    Alert.alert("You can't just leave like that, noob...");
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.duckState}
          onRequestClose={() => this.handleRequestClose()}
        >
          <Button title="Duck 1" onPress={() => this.handleButtonPress("1")} />
          <Button title="Duck 2" onPress={() => this.handleButtonPress("2")} />
          <Button title="Duck 3" onPress={() => this.handleButtonPress("3")} />
          <Button title="Duck 4" onPress={() => this.handleButtonPress("4")} />
          <Button title="Duck 5" onPress={() => this.handleButtonPress("5")} />
        </Modal>
      </View>
    );
  }
}

export default MinigameModal;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
