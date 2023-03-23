import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import useGlucoseReadingsList from "../GlucoseReadingsList/useGlucoseReadingsList";
import { height, width } from "../../constants/Dimmensions";
import { GlucoseReadingsObject } from "../../types/GlucoseReadingsListType";
import { ChartConfig } from "../../constants/ChartConfig";
import ChartHourFilterButton from "../Buttons/ChartHourFilterButton";

type Props = {
  handleDataPointClick: (glucoseValue: number, time: string) => void;
};

const GlucoseReadingsChart = (props: Props) => {
  const { data, loaded, error } = useGlucoseReadingsList();
  const [clickedPoint, setClickedPoint] = useState<{
    glucoseValue: number;
    time: string;
  } | null>(null);
  const [interval, setInterval] = useState(24); // default to last 24 hours
  const [filteredData, setFilteredData] = useState<GlucoseReadingsObject[]>([]);
  const [labels, setLabels] = useState<string[]>([]); // labels for the chart
  const [modalVisible, setModalVisible] = useState(false);
  const [glucoseValue, setGlucoseValue] = useState(0);
  const [time, setTime] = useState("");

  const filterData = (interval: number) => {
    setInterval(interval);
  };

  const FilterButton = (hours: number) => (
    <TouchableOpacity
      onPress={() => filterData(hours)}
      style={{
        backgroundColor: interval === hours ? "rgb(77,209,70)" : "white",
        padding: 10,
        borderRadius: 15,

        marginRight: 5,
      }}
    >
      <Text
        style={{
          color: interval === hours ? "white" : "black",
          fontWeight: interval === hours ? "bold" : undefined,
        }}
      >
        {hours} Hours
      </Text>
    </TouchableOpacity>
  );

  const handleDataPointClick = (data: {
    index: number;
    value: number;
    dataset: any;
    x: number;
    y: number;
    getColor: (opacity: number) => string;
  }) => {
    const glucoseValue = filteredData[data.index]?.glucose_value;
    const time = filteredData[data.index]?.time;
    props.handleDataPointClick(glucoseValue, time);
  };
  useEffect(() => {
    if (data) {
      const now = Date.now();
      const intervalMilliseconds = interval * 60 * 60 * 1000;
      const filteredData = data?.glucose_list.filter((obj) => {
        const time = new Date(obj.time).getTime();
        // console.log(new Date(time), new Date(now - intervalMilliseconds));

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {[3, 6, 12, 24].map((hour) => (
          <ChartHourFilterButton
            filterData={filterData}
            hours={hour}
            interval={interval}
          />
        ))}
      </View>
      {!loaded || !data ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={{ position: "relative" }}>
          <View style={{ zIndex: 1 }}>
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    data: [
                      ...filteredData.map((obj) => obj.glucose_value),
                      300,
                    ],
                  },
                ],
              }}
              width={width}
              height={height * 0.9}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={50}
              chartConfig={ChartConfig}
              onDataPointClick={handleDataPointClick}
              fromZero
              withInnerLines={false}
              bezier={false}
              style={{
                backgroundColor: "white",
              }}
            />
          </View>
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <Text>Glucose Value: {glucoseValue}</Text>
            <Text>Time: {time}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: "rgb(77,209,70)",
                padding: 10,
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default GlucoseReadingsChart;
