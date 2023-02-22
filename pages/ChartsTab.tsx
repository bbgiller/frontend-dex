import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import GlucoseReadingsList from "../components/GlucoseReadingsList/GlucoseReadingsList";
import GlucoseReadingsChart from "../components/GlucoseReadingsChart/GlucoseReadingsChart";

type Props = {};

const ChartsTab = (props: Props) => {
  const [showGraph, setShowGraph] = useState(false);

  const toggleView = () => {
    setShowGraph(!showGraph);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleView}>
        <Text>Switch View</Text>
      </TouchableOpacity>
      {!showGraph ? <GlucoseReadingsList /> : <GlucoseReadingsChart />}
    </View>
  );
};

export default ChartsTab;
