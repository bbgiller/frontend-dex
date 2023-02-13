import React from "react";
import { StyleSheet } from "react-native";
import { height, width } from "./constants/Dimmensions";

const radius = 88;
export const HeaderStyles = StyleSheet.create({
  circle: {
    // width: radius,
    // height: radius,
    // borderRadius: radius / 2,
    borderColor: "black",
    // borderWidth: 3,
    // backgroundColor: "green",
  },
  header: {
    // backgroundColor: "black",
    top: 85,
    height: height * 0.05,
    width: width,
    alignItems: "center",
  },
  glucoseText: {
    // textAlignVertical: "center",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});
