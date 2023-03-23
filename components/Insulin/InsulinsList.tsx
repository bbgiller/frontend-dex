import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { height, width } from "../../constants/Dimmensions";
import useGetInsulins from "./useGetInsulins";
import InsulinListItem from "./InsulinListItem";
import { GlucoseReadingsListStyles as styles } from "../../styles/GlucoseReadingsListStyles";
type Props = {};

const InsulinsList = (props: Props) => {
  const { data, loaded, error } = useGetInsulins();
  const insulins = data?.insulins_list;
  const sortedInsulins = insulins?.sort((a, b) => {
    return new Date(a.time) - new Date(b.time);
  });
  const renderInsulins = () =>
    sortedInsulins?.map(({ id, dose, time, type }) => (
      <View key={id}>
        <InsulinListItem
          id={id}
          user_id={1}
          dose={dose}
          time={time}
          type={type}
        />
      </View>
    ));
  return (
    <View style={styles.container}>
      {!loaded ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={[styles.flatList, {}]}>
            {renderInsulins()}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default InsulinsList;
