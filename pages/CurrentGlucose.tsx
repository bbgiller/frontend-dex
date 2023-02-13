import React, { useState } from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { Pressable, Text, View } from "react-native";
import { CurrentGlucoseStyles } from "../styles/CurrentGlucoseStyles";
import UnitButton from "../components/Buttons/CurrentGlucose/UnitButton";

const CurrentGlucose = () => {
  const [mmol, setMmol] = useState(false);
  const { data, loaded, error } = useCurrentGlucose();
  if (!loaded) return <Text>loading</Text>;
  if (error) return <Text>{error}</Text>;

  const handlePress = (unit: string) => {
    if (unit === "mg") {
      if (!mmol) {
        return;
      } else {
        setMmol(false);
      }
    } else {
      if (mmol) {
        return;
      } else {
        setMmol(true);
      }
    }
  };

  return (
    <View style={CurrentGlucoseStyles.container}>
      <View style={CurrentGlucoseStyles.units}>
        <UnitButton unit="mg" onPressFunction={() => handlePress("mg")} />

        <UnitButton unit="mmol" onPressFunction={() => handlePress("mmol")} />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={CurrentGlucoseStyles.allText}>
          <Text>Glucose is {}</Text>
          <Text style={CurrentGlucoseStyles.glucoseText}>
            {mmol ? data?.mmol : data?.glucose_value}
          </Text>
          <Text> and {}</Text>
          <Text>{data?.trend_description}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CurrentGlucose;
