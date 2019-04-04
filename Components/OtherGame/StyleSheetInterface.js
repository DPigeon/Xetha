import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tile: {
    borderWidth: 1,
    width: 65,
    height: 65
  },
  tileGhost: {
    color: "brown",
    fontSize: 60
  },
  tileDuck: {
    color: "purple",
    fontSize: 60
  },
  tileSnowman: {
    color: "blue",
    fontSize: 60
  },
  tileMultitouch: {
    color: "gray",
    fontSize: 60
  },
  tileTarget: {
    color: "red",
    fontSize: 60
  },
  tileSnowflake: {
    color: "cyan",
    fontSize: 60
  },
  tileEnergy: {
    color: "red",
    fontSize: 60
  },
  tileWii: {
    color: "lime",
    fontSize: 60
  },
  Button: {
    backgroundColor: "#2d594d",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  ButtonPosition: {
    bottom: -123,
    right: 0
  },
  minigameContainer: {
    position: "absolute",
    top: width / 3,
    width: width,
    height: height / 2
  }
});

export default styles;
