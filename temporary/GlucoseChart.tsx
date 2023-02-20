import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { width } from "./Dimmensions";
import { GlucoseReadingsObject } from "../types/GlucoseReadingsListType";

type Props = { data: GlucoseReadingsObject[] };

const GlucoseChart = (props: Props) => {
  const { data } = props;
  const date = new Date(Date.now());
  const currentHour = date.getHours();
  const graphHours = [];
  let i = 6;
  while (i > 0) {
    graphHours.push((currentHour - i).toString());
    i--;
  }
  // console.log(props.data.map((obj) => obj.glucose_value));
  return (
    <View>
      {/* <Text>Bezier Line Chart</Text> */}
      <LineChart
        data={{
          labels: graphHours,
          datasets: [
            {
              data: props.data.map((obj) => obj.glucose_value),
            },
          ],
        }}
        width={width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#191970",
          backgroundGradientTo: "silver",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "silver",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          // borderRadius: 16,
        }}
      />
    </View>
  );
};

export default GlucoseChart;
