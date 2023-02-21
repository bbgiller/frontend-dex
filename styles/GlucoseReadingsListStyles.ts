import { StyleSheet } from "react-native";
import { height, width } from "../constants/Dimmensions";

export const GlucoseReadingsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "white",
  },
  listItems: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemSeparator: {
    padding: 5,
    height: 2,
    backgroundColor: "grey",
    opacity: 0.1,
  },
});
