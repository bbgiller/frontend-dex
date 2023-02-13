import React, { useState } from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { Text, View } from "react-native";
import { CurrentGlucoseStyles } from "../styles/CurrentGlucoseStyles";

const CurrentGlucose = () => {
  const [mmol, setMmol] = useState(false);
  const { data, loaded, error } = useCurrentGlucose();
  if (!loaded) return <Text>loading</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={CurrentGlucoseStyles.container}>
      <View style={CurrentGlucoseStyles.units}>
        <Text>mg/dl</Text>
        <Text>mmol/l</Text>
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
