import React from "react";
import { View, Text } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../../styles/GlucoseReadingsListStyles";
type Props = {
  glucoseValue: number;
  time: string;
};

const GlucoseReading = ({ glucoseValue, time }: Props) => {
  const formattedTime = new Date(time).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <View style={styles.listItems}>
      <Text style={{ fontSize: 15 }}>{glucoseValue}</Text>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

export default GlucoseReading;
