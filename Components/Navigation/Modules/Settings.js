import React, { Component } from "react";
import { Text, View } from "react-native";

class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Difficulty:</Text>
        <TouchableOpacity>
          <Text>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Hard</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Intense</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Settings;
