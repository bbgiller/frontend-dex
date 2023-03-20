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
  const toggleView = () => {
    setShowGraph(!showGraph);
  };

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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        data?.glucose_value && data.trend_arrow
          ? data?.glucose_value.toString() + data?.trend_arrow
          : "",
      headerTitleStyle: { fontSize: 30 },

      headerRight: () => <SwitchButton />,
    });
  }, [navigation, showGraph]);

  return !showGraph ? <GlucoseReadingsList /> : <GlucoseReadingsChart />;
};

export default ChartsTab;
