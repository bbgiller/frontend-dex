import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import { View, Text } from "react-native";

type Props = { glucose: string };

const Header = (props: Props) => {
  const { glucose } = props;
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.glucoseText}>{glucose}</Text>
    </View>
  );
};

export default Header;
