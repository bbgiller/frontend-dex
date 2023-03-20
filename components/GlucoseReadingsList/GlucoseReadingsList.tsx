import React from "react";
import useGlucoseReadingsList from "./useGlucoseReadingsList";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { GlucoseReadingsListStyles as styles } from "../../styles/GlucoseReadingsListStyles";
import GlucoseReading from "./GlucoseReading";
import { height, width } from "../../constants/Dimmensions";
// import { GlucoseRanges } from "../constants/GlucoseRangeColors";
type Props = {};

// const rangeEmojis = {
//   low: "😖",
//   normal: "☺",
//   high: "😤",
// };
const headerComponent = (
  <View style={styles.listItems}>
    <Text style={styles.columnHeader}>Glucose (mg/dl)</Text>
  </View>
);

const GlucoseReadingsList = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const glucoseReadings = data?.glucose_list;

  const renderGlucoseReadings = () =>
    glucoseReadings?.map(({ glucose_value, time }) => (
      <View>
        <GlucoseReading glucoseValue={glucose_value} time={time} key={time} />
        <View
          style={{
            alignSelf: "center",
            width: width * 0.8,
            backgroundColor: "#f2f2f3",
            height: height * 0.001,
            marginTop: 5,
            marginBottom: 5,
          }}
        ></View>
      </View>
    ));
  return (
    <View style={styles.container}>
      {!loaded ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View
        // style={{
        //   backgroundColor: "green",
        //   height: height * 0.7,
        //   width: width,
        //   // borderRadius: 30,
        // }}
        >
          {headerComponent}

          <ScrollView contentContainerStyle={[styles.flatList, {}]}>
            {renderGlucoseReadings()}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default GlucoseReadingsList;
