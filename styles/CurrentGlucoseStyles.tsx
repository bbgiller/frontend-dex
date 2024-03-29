import React from "react";
import { StyleSheet } from "react-native";
import { height, width } from "../constants/Dimmensions";

export const CurrentGlucoseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  allText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    flexDirection: "column",
  },
  glucoseText: {
    fontWeight: "bold",
  },
  mg: { fontSize: 20, color: "black", fontWeight: "bold" },
  mmol: { fontSize: 20, color: "grey", opacity: 0.5 },
  units: {
    fontSize: 15,
    position: "absolute",
    top: height * 0.05,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: width * 0.05,
  },
});
