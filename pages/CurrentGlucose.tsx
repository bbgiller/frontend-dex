import React from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { Text, View } from "react-native";
import { CurrentGlucoseStyles } from "../styles/CurrentGlucoseStyles";
const CurrentGlucose = () => {
  const { data, loaded, error } = useCurrentGlucose();
  if (!loaded) return <Text>loading</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={CurrentGlucoseStyles.container}>
      <Text style={CurrentGlucoseStyles.allText}>
        <Text>Glucose is {}</Text>
        <Text style={CurrentGlucoseStyles.glucoseText}>
          {data?.glucose_value}
        </Text>
        <Text> and {}</Text>
        <Text>{data?.trend_description}</Text>
      </Text>
    </View>
  );
};

export default CurrentGlucose;
