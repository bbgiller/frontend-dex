import React, { useEffect, useState } from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { ActivityIndicator, Text, View } from "react-native";
import { CurrentGlucoseStyles } from "../styles/CurrentGlucoseStyles";
import UnitButton from "../components/Buttons/CurrentGlucose/UnitButton";
import { timeFormat } from "../constants/TimeFormat";

const CurrentGlucose = () => {
  const { data, loaded, error } = useCurrentGlucose();
  const [mmol, setMmol] = useState(false);

  const handlePress = (unit: string) => {
    setMmol(unit === "mmol");
  };

  return (
    <View style={CurrentGlucoseStyles.container}>
      {!loaded ? (
        <ActivityIndicator />
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

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={CurrentGlucoseStyles.allText}>
              <Text
                style={[CurrentGlucoseStyles.glucoseText, { fontSize: 60 }]}
              >
                {mmol ? data?.mmol : data?.glucose_value}
              </Text>
              {"\n"}
              <Text>{data?.trend_description}</Text>
            </Text>
          </View>
        </>
      )}
      <Text style={{ top: 200, color: "grey" }}>
        Last Updated: {data?.time ? timeFormat(data.time) : null}
      </Text>
    </View>
  );
};

export default CurrentGlucose;
