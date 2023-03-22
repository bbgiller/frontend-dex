import { StyleSheet } from "react-native";
import { height, width } from "../constants/Dimmensions";

export const GlucoseReadingsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  listContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    alignSelf: "center",
    width: width * 0.8,
    backgroundColor: "#f2f2f3",
    height: height * 0.001,
    marginTop: 5,
    marginBottom: 5,
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
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});
