import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import WelcomeScreen from "./app/screens/WelcomeScreen";
import PersonalInformation from "./app/screens/PersonalInformation";
import Education from "./app/screens/Education";
import Experience from "./app/screens/Experience";
import Projects from "./app/screens/Projects";
import Languages from "./app/screens/Languages";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ 
             headerTitle: "Welcome to Mariglen Cullhaj's App"
             }}
        />

        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{
            headerTitle: "Personal Information",
          }}
        />

        <Stack.Screen
          name="Education"
          component={Education}
          options={{ headerTitle: "Education & Trainings" }}
        />

        <Stack.Screen
          name="Experience"
          component={Experience}
          options={{ headerTitle: "Work Experience" }}
        />

        <Stack.Screen
          name="Projects"
          component={Projects}
          options={{ headerTitle: "My Projects" }}
        />

        <Stack.Screen
          name="Languages"
          component={Languages}
          options={{ headerTitle: "Language Skills" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
