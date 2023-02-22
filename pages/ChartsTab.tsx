import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import GlucoseReadingsList from "../components/GlucoseReadingsList/GlucoseReadingsList";
import GlucoseReadingsChart from "../components/GlucoseReadingsChart/GlucoseReadingsChart";

type Props = {
  navigation: any;
};

const ChartsTab = ({ navigation }: Props) => {
  const [showGraph, setShowGraph] = useState(false);

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
      headerTitle: "Charts",
      headerRight: () => <SwitchButton />,
    });
  }, [navigation, showGraph]);

  return !showGraph ? <GlucoseReadingsList /> : <GlucoseReadingsChart />;
};

export default ChartsTab;
