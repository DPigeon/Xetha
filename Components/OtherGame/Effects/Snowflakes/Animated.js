import React, { PureComponent } from "react";
import Snow from "./Snow";
import { Modal, View, Alert, Image, StyleSheet } from "react-native";

class AnimatedSnowflakes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }

  render() {
    const snow = [];
    if (this.state.width > 0 && this.state.height > 0) {
      for (let i = 0; i < 40; i++) {
        snow.push(
          <Snow key={i} width={this.state.width} height={this.state.height} />
        );
      }
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.setModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <Image
            source={require("../../../../assets/snowflakesBg.jpg")}
            style={styles.snowContainer}
          />
          <View
            {...this.props}
            onLayout={event => {
              const { width, height } = event.nativeEvent.layout;
              this.setState({
                width: width,
                height: height
              });
            }}
          >
            {snow}
          </View>
        </Modal>
      </View>
    );
  }
}

export default AnimatedSnowflakes;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  snowContainer: {
    position: "absolute"
  }
});
