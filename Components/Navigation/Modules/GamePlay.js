import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class GamePlay extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Row 1 */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            <Icon name="close" style={styles.tileX} />
          </View>
          <View style={[styles.tile, { borderTopWidth: 0 }]} />
          <View
            style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}
          />
        </View>
        {/* Row 2 */}
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.tile, { borderLeftWidth: 0 }]} />
          <View style={[styles.tile, {}]} />
          <View style={[styles.tile, { borderRightWidth: 0 }]} />
        </View>
        {/* Row 3 */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]}
          />
          <View style={[styles.tile, { borderBottomWidth: 0 }]} />
          <View
            style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]}
          />
        </View>
      </View>
    );
  }
}

export default GamePlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tile: {
    borderWidth: 1,
    width: 100,
    height: 100
  }
});
