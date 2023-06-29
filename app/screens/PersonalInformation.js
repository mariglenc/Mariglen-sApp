import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableHighlight,
  ToastAndroid,
  Clipboard,
} from "react-native";
import { useState } from "react";

import colors from "../config/colors";
import sizes from "../config/sizes";

const PersonalInformation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const handleLongPress = (value) => {
    Clipboard.setString(value);
    ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>Mariglen Çullhaj</Text>
      </View>

      <View style={styles.rowInfo}>
        <Text style={styles.label}>Date of birth:</Text>
        <Text style={styles.text}>18/05/1997</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.label}>Nationality:</Text>
        <Text style={styles.text}>Albanian</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.text}>Male</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.label}>Education:</Text>
        <Text style={styles.text}>Master Degree in Cyber Security</Text>
      </View>

      <TouchableHighlight
        style={styles.rowInfo}
        underlayColor={colors.lightGray}
        onPress={() => handleLinkPress("tel:+355676512186")}
        onLongPress={() => handleLongPress("+355676512186")}
      >
        <View>
          <Text style={styles.label}>Phone number:</Text>
          <Text style={styles.linkText}>(+355) 0676512186 (Mobile)</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.rowInfo}
        underlayColor={colors.lightGray}
        onPress={() => handleLinkPress("https://wa.me/+355676512186")}
        onLongPress={() => handleLongPress("https://wa.me/+355676512186")}
      >
        <View>
          <Text style={styles.label}>Whatsapp Messenger:</Text>
          <Text style={styles.linkText}>+355676512186</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.rowInfo}
        underlayColor={colors.lightGray}
        onPress={() => handleLinkPress("mailto:mariglen.cullhai@gmail.com")}
        onLongPress={() => handleLongPress("mariglen.cullhai@gmail.com")}
      >
        <View>
          <Text style={styles.label}>Email address:</Text>
          <Text style={styles.linkText}>mariglen.cullhai@gmail.com</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.rowInfo}
        underlayColor={colors.lightGray}
        onPress={() =>
          handleLinkPress(
            "https://al.linkedin.com/in/mariglen-çullhaj-2278511a3"
          )
        }
        onLongPress={() =>
          handleLongPress(
            "https://al.linkedin.com/in/mariglen-çullhaj-2278511a3"
          )
        }
      >
        <View>
          <Text style={styles.label}>LinkedIn:</Text>
          <Text style={styles.linkText}>
            https://al.linkedin.com/in/mariglen-çullhaj-2278511a3
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.rowInfo}
        underlayColor={colors.lightGray}
        onPress={() =>
          handleLinkPress("https://www.instagram.com/c_mariglen1/")
        }
        onLongPress={() =>
          handleLongPress("https://www.instagram.com/c_mariglen1/")
        }
      >
        <View>
          <Text style={styles.label}>Instagram:</Text>
          <Text style={styles.linkText}>
            https://www.instagram.com/c_mariglen1/
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.rowInfo}
        underlayColor={colors.lightGray}
        onPress={() =>
          handleLinkPress("https://www.facebook.com/mariglen.cullhaj.9/")
        }
        onLongPress={() =>
          handleLongPress("https://www.facebook.com/mariglen.cullhaj.9/")
        }
      >
        <View>
          <Text style={styles.label}>Facebook:</Text>
          <Text style={styles.linkText}>
            https://www.facebook.com/mariglen.cullhaj.9/
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.rowInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>
          Rruga Agush Gjergjevica, 1001, Tirane, Albania (Home)
        </Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.label}>Book Lover:</Text>
        <Text style={styles.text}>
          A collection of diverse books including psychology and philosophy,
          history, technology, religion, and novels to various interests and
          subjects.
        </Text>
      </View>
      <View style={styles.rowInfo}>
        <Button
          title={expanded ? "Hide Hobbies" : "Show Hobbies"}
          onPress={handleToggleExpand}
        />
        {expanded && (
          <Text style={styles.bookDescription}>
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Computers:</Text>I have a deep
            passion for coding, particularly in JavaScript (JS) and PHP, and
            enjoy creating software solutions. Additionally, I find great
            fascination in networking, specifically working with Cisco or
            MikroTik equipment. Building secure and efficient networks is a
            rewarding challenge. Another hobby of mine is building VoIP systems
            from scratch, integrating technologies to enable seamless voice
            communication over the internet. Exploring databases and leveraging
            them to store and retrieve data adds another layer of complexity and
            interest to my coding projects.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>
              Exploring New Places with My Car:
            </Text>
            I find joy in embarking on road trips and discovering new
            destinations with my car. The open road offers a sense of freedom
            and adventure like no other.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>
              Cars and Engine Mechanics:
            </Text>
            I have a keen interest in cars and love learning about how their
            engines work. Understanding the intricate components that power
            these machines is truly fascinating to me.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Reading Books:</Text>I enjoy
            reading books on a variety of subjects, including psychology,
            philosophy, religion, and science. The pursuit of knowledge through
            literature broadens my horizons and stimulates my thinking.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Cross Biking:</Text>I have a
            passion for cross biking, which combines my love for outdoor
            activities and physical challenges. Exploring trails and pushing my
            limits on a cross bike brings me a great sense of exhilaration and
            accomplishment.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  rowInfo: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontSize: sizes.secondary,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: sizes.third,
    marginBottom: 12,
  },
  linkText: {
    fontSize: sizes.third,
    marginBottom: 12,
    color: colors.blue,
    textDecorationLine: "underline",
  },
});

export default PersonalInformation;
