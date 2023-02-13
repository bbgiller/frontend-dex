import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { CurrentGlucoseStyles } from "../../../styles/CurrentGlucoseStyles";

type Props = { unit: string; onPressFunction: () => void };

const UnitButton = (props: Props) => {
  const { unit, onPressFunction } = props;
  const [pressed, setPressed] = useState(unit === "mg" ? true : false);
  return (
    <Pressable onPress={onPressFunction}>
      <Text
        style={
          unit === "mg" ? CurrentGlucoseStyles.mg : CurrentGlucoseStyles.mmol
        }
      >
        {unit}
      </Text>
    </Pressable>
  );
};

export default UnitButton;
