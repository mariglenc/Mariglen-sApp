import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

const Projects = () => {
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

export default Projects;
