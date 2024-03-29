import React from "react";
import { View, Text } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../../styles/GlucoseReadingsListStyles";
import { timeFormat } from "../../constants/TimeFormat";
type Props = {
  id: number;
  user_id: number;
  dose: number;
  time: string;
  type: string;
};

const InsulinListItem = ({ id, user_id, dose, time, type }: Props) => {
  const newTime = timeFormat(time);
  console.log(time);
  console.log(newTime);

  console.log(user_id, dose);
  return (
    <View style={styles.listItems}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17 }}>{dose}</Text>
      </View>

      <Text style={styles.time}>{newTime}</Text>
    </View>
  );
};

export default InsulinListItem;
