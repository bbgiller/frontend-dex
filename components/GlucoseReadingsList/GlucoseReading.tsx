import React from "react";
import { View, Text } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../../styles/GlucoseReadingsListStyles";
import { timeFormat } from "../../constants/TimeFormat";
type Props = {
  glucoseValue: number;
  time: string;
};

const GlucoseReading = ({ glucoseValue, time }: Props) => {
  const formattedTime = timeFormat(time);
  return (
    <View style={styles.listItems}>
      <Text style={{ fontSize: 15 }}>{glucoseValue}</Text>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

export default GlucoseReading;
