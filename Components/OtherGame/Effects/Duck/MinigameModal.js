import React, { PureComponent } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text
} from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import stylesSheet from "../../StyleSheetInterface";

class MinigameModal extends PureComponent {
  state = { randomNumber: Math.floor(Math.random() * 5) };
  // Minigame: you have 5 buttons and you have to guess which duck is the right 1 (add duck sound effect) 1/5 chances

  handleButtonPress = number => {
    let { randomNumber } = this.state;
    console.log(this.props.duckModal(), this.props.duckState);
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
          <Text>There are many ducks... which one is the good one ?!</Text>
          <TouchableOpacity onPress={() => this.handleButtonPress(0)}>
            <Icon name="duck" style={stylesSheet.tileDuck} />
          </TouchableOpacity>
          <View />
          <TouchableOpacity onPress={() => this.handleButtonPress(0)}>
            <Icon name="duck" style={stylesSheet.tileDuck} />
          </TouchableOpacity>
          <View />
          <TouchableOpacity onPress={() => this.handleButtonPress(0)}>
            <Icon name="duck" style={stylesSheet.tileDuck} />
          </TouchableOpacity>
          <View />
          <TouchableOpacity onPress={() => this.handleButtonPress(0)}>
            <Icon name="duck" style={stylesSheet.tileDuck} />
          </TouchableOpacity>
          <View />
          <TouchableOpacity onPress={() => this.handleButtonPress(0)}>
            <Icon name="duck" style={stylesSheet.tileDuck} />
          </TouchableOpacity>
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
