import { StyleSheet } from "react-native";
import { height, width } from "../constants/Dimmensions";

export const GlucoseReadingsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f3",
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  flatList: {
    flexGrow: 1,
    backgroundColor: "white",
    // height: height * 0.7,
    borderRadius: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: "scroll",
  },
  listItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    width: width * 0.9,
  },
  itemSeparator: {
    padding: 1,
    height: 2,
    backgroundColor: "grey",
    opacity: 0.1,
  },
  columnHeader: {
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    paddingBottom: 12,
    fontStyle: "italic",
  },
  time: {
    fontSize: 17,
    color: "grey",
  },
});
