import React from "react";
import { Modal, StyleSheet, View, Alert } from "react-native";
import StartAnimation from "../../StartAnimation";

function Snowflakes({ setModal }) {
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={setModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View>
          <StartAnimation
            source={require("../../../assets/snowflakes.gif")}
            style={imageStyle.snowflakes}
          />
        </View>
      </Modal>
    </View>
  );
}

export default Snowflakes;

const imageStyle = StyleSheet.create({
  snowflakes: {
    alignItems: "center",
    position: "absolute"
  }
});
