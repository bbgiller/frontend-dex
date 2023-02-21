import { StyleSheet } from "react-native";
import { height, width } from "../constants/Dimmensions";

export const GlucoseReadingsListStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  flatList: {
    backgroundColor: "white",
    paddingTop: 20,
    width: width * 0.9,
    borderRadius: 16,
  },
  listItems: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemSeparator: {
    padding: 1,
    height: 2,
    backgroundColor: "grey",
    opacity: 0.1,
  },
});
