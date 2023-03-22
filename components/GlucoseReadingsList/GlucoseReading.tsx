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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            ...styles.circle,
            backgroundColor:
              glucoseValue <= 80
                ? "red"
                : glucoseValue >= 180
                ? "yellow"
                : "green",
          }}
        ></View>
        <Text style={{ fontSize: 17 }}>{glucoseValue}</Text>
      </View>

      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

export default GlucoseReading;
