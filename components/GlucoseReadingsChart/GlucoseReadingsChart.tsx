import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import useGlucoseReadingsList from "../GlucoseReadingsList/useGlucoseReadingsList";
import { height, width } from "../../constants/Dimmensions";
import { GlucoseReadingsObject } from "../../types/GlucoseReadingsListType";

type Props = {};

const GlucoseReadingsChart = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();

  const [interval, setInterval] = useState(24); // default to last 24 hours
  const [filteredData, setFilteredData] = useState<GlucoseReadingsObject[]>([]);
  const [labels, setLabels] = useState<string[]>([]); // labels for the chart

  const filterData = (interval: number) => {
    setInterval(interval);
  };

  useEffect(() => {
    if (data) {
      const now = Date.now();
      const intervalMilliseconds = interval * 60 * 60 * 1000;
      const filteredData = data?.glucose_list.filter((obj) => {
        const time = new Date(obj.time).getTime();
        console.log(new Date(time), new Date(now - intervalMilliseconds));

        return time >= now - intervalMilliseconds;
      });
      setFilteredData(filteredData);

      // set labels for the chart
      const newLabels = [];
      const date = new Date();
      const currentHour = date.getHours();
      for (let i = currentHour - interval / 3 + 1; i <= currentHour; i++) {
        let labelHour = i < 0 ? i + 12 : i;
        let suffix = i < 12 ? "AM" : "PM";
        if (labelHour === 0) {
          labelHour = 12;
        } else if (labelHour > 12) {
          labelHour -= 12;
        }
        newLabels.push(`${labelHour} ${suffix}`);
      }
      setLabels(newLabels);
    }
  }, [interval, data]);
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => filterData(24)}
          style={{
            backgroundColor: interval === 24 ? "gray" : "lightgray",
            padding: 5,
            borderRadius: 5,
            marginRight: 5,
          }}
        >
          <Text>Last 24 Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterData(12)}
          style={{
            backgroundColor: interval === 12 ? "gray" : "lightgray",
            padding: 5,
            borderRadius: 5,
            marginRight: 5,
          }}
        >
          <Text>Last 12 Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterData(6)}
          style={{
            backgroundColor: interval === 6 ? "gray" : "lightgray",
            padding: 5,
            borderRadius: 5,
            marginRight: 5,
          }}
        >
          <Text>Last 6 Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterData(3)}
          style={{
            backgroundColor: interval === 3 ? "gray" : "lightgray",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>Last 3 Hours</Text>
        </TouchableOpacity>
      </View>
      {!loaded || !data ? (
        <Text>loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: [...filteredData.map((obj) => obj.glucose_value), 300],
              },
            ],
          }}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={50}
          chartConfig={{
            backgroundColor: "white",
            decimalPlaces: 0,
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
            fillShadowGradient: "rgba(52, 168, 83, 0.9)",
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
