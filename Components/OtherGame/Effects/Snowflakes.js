import React from "react";
import { Modal, Text, View, Alert } from "react-native";

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
          <Text>Lol wtf</Text>
        </View>
      </Modal>
    </View>
  );
}

export default Snowflakes;
