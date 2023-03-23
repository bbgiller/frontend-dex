import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import GlucoseReadingsList from "../components/GlucoseReadingsList/GlucoseReadingsList";
import GlucoseReadingsChart from "../components/GlucoseReadingsChart/GlucoseReadingsChart";
import { GlucoseDataType } from "../types/GlucoseDataType";
import useCurrentGlucose from "../components/CurrentGlucose/useCurrentGlucose";

type Props = {
  navigation: any;
};

const ChartsTab = ({ navigation }: Props) => {
  const [showGraph, setShowGraph] = useState(false);
  const { data, loaded, error } = useCurrentGlucose();
  const [clickedPoint, setClickedPoint] = useState<{
    glucoseValue: number;
    time: string;
  } | null>(null);
  const toggleView = () => {
    setShowGraph(!showGraph);
  };

  const ExitButton = () => (
    <TouchableOpacity
      style={{ alignItems: "center" }}
      onPress={() => setClickedPoint(null)}
    >
      <Ionicons
        style={{ right: 35, top: 5 }}
        name="ios-close-circle"
        size={25}
      />
    </TouchableOpacity>
  );

  const SwitchButton = () => (
    <TouchableOpacity
      style={{
        padding: 5,
        borderRadius: 5,
      }}
      onPress={toggleView}
    >
      <Ionicons
        style={{ alignSelf: "flex-end", right: 20 }}
        name="ios-bar-chart"
        size={25}
        color={showGraph ? "black" : "grey"}
      />
    </TouchableOpacity>
  );

  const headerTitle = clickedPoint
    ? `${clickedPoint.glucoseValue} at ${clickedPoint.time}`
    : data?.glucose_value && data.trend_arrow
    ? data?.glucose_value.toString() + data?.trend_arrow
    : "";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: headerTitle,
      headerTitleStyle: {
        fontSize: 30,
        color: clickedPoint ? "grey" : "black",
      },
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          {clickedPoint ? <ExitButton /> : null}
          <View style={{ alignSelf: "flex-end" }}>
            <SwitchButton />
          </View>
        </View>
      ),
    });
  }, [navigation, showGraph, clickedPoint]);

  const handleDataPointClick = (glucoseValue: number, time: string) => {
    setClickedPoint({ glucoseValue, time });
  };

  return !showGraph ? (
    <GlucoseReadingsList />
  ) : (
    <GlucoseReadingsChart handleDataPointClick={handleDataPointClick} />
  );
};

export default ChartsTab;
