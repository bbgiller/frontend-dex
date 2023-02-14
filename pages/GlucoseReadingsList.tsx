import React from "react";
import useGlucoseReadingsList from "../components/GlucoseReadingsList/useGlucoseReadingsList";
import { View, Text } from "react-native";
import { FlatList } from "react-native";

type Props = {};

const GlucoseReadingsList = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const glucoseReadings = data?.glucose_list;

  return (
    <View>
      <FlatList
        renderItem={({ item }) => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>{item.time}</Text>
            <Text>{item.glucose_value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.time}
        data={glucoseReadings}
      ></FlatList>
    </View>
  );
};

export default GlucoseReadingsList;
