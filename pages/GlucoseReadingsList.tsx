import React from "react";
import useGlucoseReadingsList from "../components/GlucoseReadingsList/useGlucoseReadingsList";
import { View, Text } from "react-native";
import { FlatList } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../styles/GlucoseReadingsListStyles";
import { GlucoseRanges } from "../constants/GlucoseRangeColors";
type Props = {};

const rangeEmojis = {
  low: "😖",
  normal: "☺",
  high: "😤",
};

const GlucoseReadingsList = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const glucoseReadings = data?.glucose_list;

  return (
    <View style={styles.container}>
      {!loaded ? (
        <Text>loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          ItemSeparatorComponent={() => (
            <View style={styles.itemSeparator}></View>
          )}
          renderItem={({ item }) => (
            <View style={styles.listItems}>
              {<Text>{rangeEmojis[GlucoseRanges(item.glucose_value)]}</Text>}
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "system",
                }}
              >
                {item.glucose_value}
              </Text>
              <Text style={{ fontSize: 10 }}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item) => item.time}
          data={glucoseReadings}
        ></FlatList>
      )}
    </View>
  );
};

export default GlucoseReadingsList;
