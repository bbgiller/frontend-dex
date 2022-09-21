import React from "react";
import { StyleSheet } from "react-native";

const radius = 88;
export const HeaderStyles = StyleSheet.create({
  circle: {
    width: radius,
    height: radius,
    borderRadius: radius / 2,
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "green",
  },
  glucoseText: {
    textAlignVertical: "center",
    top: 23,
    left: 15,
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
});
