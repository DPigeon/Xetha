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
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import stylesSheet from "../../StyleSheetInterface";

class DuckModal extends PureComponent {
  state = { randomNumber: Math.floor(Math.random() * 9) };
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
          <Image
            source={require("../../../../assets/duckBg.png")}
            style={styles.duckContainer}
          />
          <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.handleButtonPress(0)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleButtonPress(1)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleButtonPress(2)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.handleButtonPress(3)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleButtonPress(4)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleButtonPress(5)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.handleButtonPress(6)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleButtonPress(7)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleButtonPress(8)}
                style={[styles.tile]}
              >
                <Icon name="duck" style={stylesSheet.tileDuck} />
              </TouchableOpacity>
            </View>
          </View>
          <View />
        </Modal>
      </View>
    );
  }
}

export default DuckModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  duckContainer: {
    position: "absolute"
  },
  tile: {
    borderWidth: 1,
    width: 65,
    height: 65
  }
});
