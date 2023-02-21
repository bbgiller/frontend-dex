import React from "react";
import useGlucoseReadingsList from "../components/GlucoseReadingsList/useGlucoseReadingsList";
import { View, Text } from "react-native";
import { FlatList } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../styles/GlucoseReadingsListStyles";
type Props = {};

const GlucoseReadingsList = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const glucoseReadings = data?.glucose_list;

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator}></View>
        )}
        renderItem={({ item }) => (
          <View style={styles.listItems}>
            <Text>{item.glucose_value}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
        keyExtractor={(item) => item.time}
        data={glucoseReadings}
      ></FlatList>
    </View>
  );
};

export default GlucoseReadingsList;
