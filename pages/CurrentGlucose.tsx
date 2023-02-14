import React, { useState } from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { Text, View } from "react-native";
import { CurrentGlucoseStyles } from "../styles/CurrentGlucoseStyles";
import UnitButton from "../components/Buttons/CurrentGlucose/UnitButton";

const CurrentGlucose = () => {
  const { data, loaded, error } = useCurrentGlucose();
  const [mmol, setMmol] = useState(false);

  const handlePress = (unit: string) => {
    setMmol(unit === "mmol");
  };

  return (
    <View style={CurrentGlucoseStyles.container}>
      {!loaded ? (
        <Text>loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <View style={CurrentGlucoseStyles.units}>
            <UnitButton
              color={mmol ? "grey" : "black"}
              unit="mg"
              onPressFunction={() => handlePress("mg")}
            />
            <UnitButton
              color={!mmol ? "grey" : "black"}
              unit="mmol"
              onPressFunction={() => handlePress("mmol")}
            />
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
        </>
      )}
    </View>
  );
};

export default CurrentGlucose;
