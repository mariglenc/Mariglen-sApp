import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import WelcomeScreen from "./app/screens/WelcomeScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import Education from "./app/screens/Education";
import Experience from "./app/screens/Experience";
import Projects from "./app/screens/Projects";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Details" component={DetailsScreen} options={{}} />

        <Stack.Screen name="Education" component={Education} options={{}} />

        <Stack.Screen name="Experience" component={Experience} options={{}} />

        <Stack.Screen name="Projects" component={Projects} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
