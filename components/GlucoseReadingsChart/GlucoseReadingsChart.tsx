import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import useGlucoseReadingsList from "../GlucoseReadingsList/useGlucoseReadingsList";
import { height, width } from "../../constants/Dimmensions";

type Props = {};

const GlucoseReadingsChart = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();

  const date = new Date(Date.now());
  const currentHour = date.getHours();
  const graphHours = [];
  let i = 6;
  while (i > 0) {
    graphHours.push((currentHour - i).toString());
    i--;
  }
  return (
    <View>
      {/* <Text>Bezier Line Chart</Text> */}
      {!loaded || !data ? (
        <Text>loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <LineChart
          data={{
            labels: graphHours,
            datasets: [
              {
                data: [
                  ...data?.glucose_list.map((obj) => obj.glucose_value),
                  300,
                ],
              },
            ],
          }}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={50}
          // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (s) => `black`,
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: ".5",
              strokeWidth: "2",
              stroke: "silver",
            },
          }}
          fromZero
          bezier={false}
          style={{
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};

export default GlucoseReadingsChart;
