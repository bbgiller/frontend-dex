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

const GlucoseReadingsList = () => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const glucoseReadings = data?.glucose_list.reverse();
  const renderGlucoseReadings = () =>
    glucoseReadings?.map(({ glucose_value, time }) => (
      <View>
        <GlucoseReading glucoseValue={glucose_value} time={time} key={time} />
      </View>
    ));
  return (
    <View style={styles.container}>
      {!loaded ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.listContainer}>
          {/* {headerComponent} */}

          <ScrollView contentContainerStyle={[styles.flatList, {}]}>
            {renderGlucoseReadings()}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default GlucoseReadingsList;
