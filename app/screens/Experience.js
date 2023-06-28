import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

const Experience = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      {/* <Button title="Go Back" onPress={goBack} /> */}
    </View>
  );
};

export default Experience;
