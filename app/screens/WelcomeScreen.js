import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Linking,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import sizes from "../config/sizes";

function WelcomeScreen() {

  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate("PersonalInformation");
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

  const goLangs = () => {
    navigation.navigate("Languages");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/backgroundImage.jpg")}
    >
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require("../assets/mariglen2.png")}
        />

        <Image
          source={require("../assets/callMe.gif")}
          style={styles.gif}
          scalesPageToFit
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.appIconsContainer}>
          <TouchableOpacity
            style={styles.appIcon}
            onPress={() =>
              Linking.openURL(
                "https://drive.google.com/file/d/1_AceTwmJmZeZHf-UAOW6-1ub6D4LRBO1/view"
              )
            }
          >
            <Image
              source={require("../assets/resume.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appIcon}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/mariglen-%C3%A7ullhaj-2278511a3?originalSubdomain=al"
              )
            }
          >
            <Image
              source={require("../assets/linkedin.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appIcon}
            onPress={() => Linking.openURL("https://github.com/mariglenc")}
          >
            <Image
              source={require("../assets/github.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appIcon}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/mariglen.cullhaj.9/")
            }
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appIcon}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/c_mariglen1/?hl=en/")
            }
          >
            <Image
              source={require("../assets/instagram.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appIcon}
            onPress={() => Linking.openURL("https://wa.me/+355676512186")}
          >
            <Image
              source={require("../assets/whatsapp.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appIcon}
            onPress={() => Linking.openURL("mailto:mariglen.cullhai@gmail.com")}
          >
            <Image
              source={require("../assets/email.png")}
              style={styles.appIconImage}
            />
            <Text style={styles.appIconText}>EmailMe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={goToDetails} style={styles.rowButton}>
        <Text style={styles.buttonText}>View Personal Information</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goEducation} style={styles.rowButton}>
        <Text style={styles.buttonText}>Explore Education</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goWorkExperience} style={styles.rowButton}>
        <Text style={styles.buttonText}>View Work Experience</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goProjects} style={styles.rowButton}>
        <Text style={styles.buttonText}>Explore My Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goLangs} style={styles.rowButton}>
        <Text style={styles.buttonText}>Languages</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrollContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
    paddingBottom: 5,
  },
  appIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  appIcon: {
    marginRight: 15,
    alignItems: "center",
  },
  appIconImage: {
    width: 80,
    height: 80,
  },
  appIconText: {
    marginTop: 5,
    fontSize: sizes.third,
    textAlign: "center",
  },
  rowButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: colors.black,
    fontSize: sizes.secondary,
  },
  contentContainer: {
    flexDirection: "row",
  },
  image: {
    width: "50%",
    height: 230,
  },
  gif: {
    width: "50%",
    height: 230,
  },
});

export default WelcomeScreen;
