import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { CurrentGlucoseStyles } from "../../../styles/CurrentGlucoseStyles";

type Props = { unit: string; onPressFunction: () => void; color: string };

const UnitButton = (props: Props) => {
  const { unit, onPressFunction, color } = props;
  const [pressed, setPressed] = useState(unit === "mg" ? true : false);
  return (
    <Pressable onPress={onPressFunction}>
      <Text style={[CurrentGlucoseStyles.mg, { color }]}>{unit}</Text>
    </Pressable>
  );
};

export default UnitButton;
