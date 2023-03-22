import React, { useEffect, useState } from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { ActivityIndicator, Text, View } from "react-native";
import { CurrentGlucoseStyles } from "../styles/CurrentGlucoseStyles";
import UnitButton from "../components/Buttons/CurrentGlucose/UnitButton";
import { timeFormat } from "../constants/TimeFormat";
import { GlucoseDataType } from "../types/GlucoseDataType";
import { height, width } from "../constants/Dimmensions";

interface CurrentGlucoseProps {
  data: GlucoseDataType | null;
  loaded: boolean;
  error: string;
}

const CurrentGlucose = (props: CurrentGlucoseProps) => {
  const { data, loaded, error } = props;
  const [mmol, setMmol] = useState(false);
  useEffect(() => {
    // This will trigger a re-render whenever the data prop changes
  }, [data]);
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

          <View style={{}}>
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
