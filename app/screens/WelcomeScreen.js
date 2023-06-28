import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Linking,
} from "react-native";

import colors from "../config/colors";

import { useNavigation } from "@react-navigation/native";

function WelcomeScreen() {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate("Details");
  };
  const goWorkExperience = () => {
    navigation.navigate("Experience");
  };
  const goEducation = () => {
    navigation.navigate("Education");
  };
  const goProjects = () => {
    navigation.navigate("Projects");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/backgroundImage.jpg")}
    >
      <TouchableOpacity style={styles.appIcon}>
        <Image
          style={styles.appIcon}
          source={require("../assets/mariglen2.png")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonLeft}
        onPress={() =>
          Linking.openURL(
            "https://drive.google.com/file/d/1_AceTwmJmZeZHf-UAOW6-1ub6D4LRBO1/view"
          )
        }
      >
        <Image source={require("../assets/resume.png")}></Image>
        <Text>Resume</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRight}
        onPress={() =>
          Linking.openURL(
            "https://www.linkedin.com/in/mariglen-%C3%A7ullhaj-2278511a3?originalSubdomain=al"
          )
        }
      >
        <Image source={require("../assets/linkedin.png")}></Image>
        <Text>Linkedin</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToDetails} style={styles.loginButton}>
        <Text style={styles.button}>Personal Information</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goEducation} style={styles.registerButton}>
        <Text style={styles.button}>Education</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={goWorkExperience}>
        <Text style={styles.button}>Work Experience</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goProjects} style={styles.registerButton}>
        <Text style={styles.button}>My Projects</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },

  appIcon: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 15,
    alignSelf: "center",
    borderRadius: 10,
  },

  button: {
    color: colors.white,
    alignSelf: "center",
    marginTop: 20,
    fontSize: 25,
  },
  buttonLeft: {
    alignSelf: "flex-start",
    position: "absolute",
    top: 70,
  },
  buttonRight: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 70,
  },
  buttonCv: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#FCA5A5",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default WelcomeScreen;
