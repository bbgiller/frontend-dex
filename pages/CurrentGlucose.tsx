import React from "react";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";
import { Text, View } from "react-native";
import { HeaderStyles } from "../HeaderStyles";
const CurrentGlucose = () => {
  const { data, loaded, error } = useCurrentGlucose();
  if (!loaded) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.glucoseText}>
        Your blood sugar is
        {data?.glucose_value}
        and
        {data?.trend_description}
      </Text>
    </View>
  );
};

export default CurrentGlucose;
