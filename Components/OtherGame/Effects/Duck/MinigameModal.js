import React, { PureComponent } from "react";
import { Modal, View, Button, Alert } from "react-native";

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

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.duckState}
        >
          <Button onPress={this.handleButtonPress("1")} />
          <Button onPress={this.handleButtonPress("2")} />
          <Button onPress={this.handleButtonPress("3")} />
          <Button onPress={this.handleButtonPress("4")} />
          <Button onPress={this.handleButtonPress("5")} />
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
