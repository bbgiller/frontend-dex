import { Dimensions, StyleSheet } from "react-native";

export const tabNavigatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
  header: {
    backgroundColor: "#f2f3f3",
  },
});
