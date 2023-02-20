import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";
import { width } from "./Dimmensions";
import { GlucoseReadingsObject } from "../types/GlucoseReadingsListType";
import { RangeReadingData } from "./RangeReadingsTypes";

type Props = { rangeData: RangeReadingData[] };

const RangeReadingsChart = (props: Props) => {
  console.log("On Chart page");
  console.log(props.rangeData);
  return (
    <View>
      {/* <Text>Bezier Line Chart</Text> */}
      <PieChart
        data={props.rangeData}
        width={width}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        accessor={"type"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
      />
    </View>
  );
};

export default RangeReadingsChart;
