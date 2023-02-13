import React from "react";
import { StyleSheet } from "react-native";
import { height, width } from "../constants/Dimmensions";

export const CurrentGlucoseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  allText: {
    fontSize: 30,
    color: "black",
  },
  glucoseText: {
    fontWeight: "bold",
  },
  units: {
    position: "absolute",
    top: height * 0.05,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: width * 0.05,
  },
});
