import React from "react";
import { View, Text } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../../styles/GlucoseReadingsListStyles";
type Props = {
  glucoseValue: number;
  time: string;
};

const GlucoseReading = ({ glucoseValue, time }: Props) => {
  return (
    <View style={styles.listItems}>
      <Text style={{ fontSize: 20 }}>{glucoseValue}</Text>
      <Text style={{ fontSize: 10 }}>{time}</Text>
    </View>
  );
};

export default GlucoseReading;
