import React from "react";
import { HeaderStyles } from "../HeaderStyles";
import { View, Text } from "react-native";

type Props = { glucose: string; trendDescription: string };

const CurrentGlucoseTab = (props: Props) => {
  const { glucose, trendDescription } = props;
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.glucoseText}>
        Your blood sugar is
        {glucose}
        and
        {trendDescription}
      </Text>
    </View>
  );
};

export default CurrentGlucoseTab;
