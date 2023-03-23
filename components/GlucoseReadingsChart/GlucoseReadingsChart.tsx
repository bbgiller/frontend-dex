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
import { timeFormat } from "../../constants/TimeFormat";

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

  const handleDataPointClick = (data: {
    index: number;
    value: number;
    dataset: any;
    x: number;
    y: number;
    getColor: (opacity: number) => string;
  }) => {
    const glucoseValue = filteredData[data.index]?.glucose_value;
    const time = timeFormat(filteredData[data.index]?.time, true);

    console.log(time);
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
      // console.log(filteredData);
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
    <View style={{ backgroundColor: "white", height: height }}>
      <View
        style={{
          flexDirection: "row",
          // alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "white",
          marginTop: 40,
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
        <View style={{ alignItems: "center", position: "relative" }}>
          <View
            style={{
              width: width * 0.9,
              zIndex: 1,
              backgroundColor: "white",
              // height: height * 0.45,
              borderRadius: 30,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
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
              width={width * 0.85}
              height={height * 0.5}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={50}
              chartConfig={ChartConfig}
              onDataPointClick={handleDataPointClick}
              fromZero
              withInnerLines={false}
              bezier={true}
              style={{
                backgroundColor: "white",
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default GlucoseReadingsChart;
