import React, { PureComponent } from "react";
import { Modal, View, Text, StyleSheet, Animated } from "react-native";

class AnimatedSnowflakes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.snowflakesState}
          onRequestClose={this.props.flashModal()}
          onDismiss={this.props.flashModal()}
        >
          <Animated.Image
            onLoad={this.onLoad}
            {...this.props}
            style={[
              {
                opacity: this.state.opacity,
                transform: [
                  {
                    scale: this.state.opacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.7, 1]
                    })
                  }
                ]
              },
              this.props.style
            ]}
          />
          <Text>YOU JUST GOT FLASHED</Text>
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
