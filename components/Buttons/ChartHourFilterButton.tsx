import { TouchableOpacity, Text } from "react-native";

const ChartHourFilterButton = ({
  hours,
  interval,
  filterData,
}: {
  hours: number;
  interval: number;
  filterData: any;
}) => (
  <TouchableOpacity
    onPress={() => filterData(hours)}
    style={{
      backgroundColor: interval === hours ? "rgb(77,209,70)" : "white",
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
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
      {hours}
      {interval === hours ? " Hours" : ""}
    </Text>
  </TouchableOpacity>
);

export default ChartHourFilterButton;
