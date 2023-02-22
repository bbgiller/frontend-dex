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
                data: data?.glucose_list.map((obj) => obj.glucose_value),
              },
            ],
          }}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (s) => `black`,
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "3",
              strokeWidth: "2",
              stroke: "silver",
            },
          }}
          bezier={false}
          style={{
            // marginVertical: 8,
            // borderRadius: 16,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};

export default GlucoseReadingsChart;
