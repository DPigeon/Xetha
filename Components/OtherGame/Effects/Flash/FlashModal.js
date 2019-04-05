import React, { PureComponent } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";
import questions from "./Questions";

const randomNumber = Math.floor(Math.random * 6);
// Asks random questions

class FlashMinigame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleInput = () => {
    this.setState({ input: this.state.input });
  };

  checkAnswer = questionNumber => {
    let { input } = this.state;
    if (
      input === questions[questionNumber].answer1 ||
      input === questions[questionNumber].answer2
    ) {
      this.setState({ input: "" });
      this.props.flashModal(); // Reset it
    } else Alert.alert("Think more...");
  };

  handleRequestClose = () => {
    Alert.alert("Find the right answer !");
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.flashState}
          onRequestClose={() => this.handleRequestClose()}
        >
          <ImageBackground
            source={require("../../../../assets/flashBg.jpg")}
            style={styles.container}
          >
            <Text style={styles.text}>{questions[randomNumber].question}</Text>
            <View />
            <View />
            <TextInput
              style={styles.textInput}
              onChangeText={input => this.setState({ input })}
              placeholder="Your answer..."
              value={this.state.input}
            />
            <TouchableOpacity
              style={{ bottom: -130, left: 10 }}
              onPress={() => this.checkAnswer(randomNumber)}
            >
              <Text style={styles.Button}>Answer !</Text>
            </TouchableOpacity>
            <View />
            <View />
          </ImageBackground>
        </Modal>
      </View>
    );
  }
}

export default FlashMinigame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  snowContainer: {
    position: "absolute"
  },
  text: {
    alignContent: "center",
    alignItems: "center",
    color: "red",
    fontSize: 40,
    bottom: -50,
    left: 10
  },
  textInput: {
    height: 60,
    backgroundColor: "#2d594d",
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    bottom: -100,
    left: 10
  },
  Button: {
    backgroundColor: "#2d594d",
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
