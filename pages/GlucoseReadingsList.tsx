import React from "react";
import useGlucoseReadingsList from "../components/GlucoseReadingsList/useGlucoseReadingsList";
import { View, Text, FlatList } from "react-native";
import { GlucoseReadingsListStyles as styles } from "../styles/GlucoseReadingsListStyles";
import GlucoseReading from "../components/GlucoseReadingsList/GlucoseReading";
// import { GlucoseRanges } from "../constants/GlucoseRangeColors";
type Props = {};

// const rangeEmojis = {
//   low: "😖",
//   normal: "☺",
//   high: "😤",
// };
const headerComponent = (
  <View style={styles.listItems}>
    <Text style={styles.columnHeader}>Glucose mg/dl</Text>
    <Text style={[styles.columnHeader]}>Time</Text>
  </View>
);

const GlucoseReadingsList = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const glucoseReadings = data?.glucose_list;

  const renderItem = ({
    item,
  }: {
    item: { glucose_value: number; time: string };
  }) => {
    const { glucose_value, time } = item;
    return <GlucoseReading glucoseValue={glucose_value} time={time} />;
  };
  return (
    <View style={styles.container}>
      {!loaded ? (
        <Text>loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          ListHeaderComponent={headerComponent}
          contentContainerStyle={styles.flatList}
          ItemSeparatorComponent={() => (
            <View style={styles.itemSeparator}></View>
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item.time}
          data={glucoseReadings}
        ></FlatList>
      )}
    </View>
  );
};

export default GlucoseReadingsList;
