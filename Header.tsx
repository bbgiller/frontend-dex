import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import { View, Text } from "react-native";

type Props = { glucose: number; arrow: string };

const Header = (props: Props) => {
  const { glucose, arrow } = props;
  return (
    <View style={HeaderStyles.circle}>
      <Text style={HeaderStyles.glucoseText}>
        {glucose}
        {arrow}
      </Text>
    </View>
  );
};

export default Header;
