import React from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from "react-native";

import colors from "../config/colors";
import sizes from "../config/sizes";

const trainings = [
  {
    period: "10/10/2022 – 05/12/2022",
    title: "THE WEB DEVELOPER BOOTCAMP 2022",
    provider: "udemy",
    website: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
  {
    period: "01/08/2022 – 24/10/2022",
    title: "RESPONSIVE WEB DESIGN",
    provider: "freecodecamp.org",
    website: "https://www.freecodecamp.org",
  },
  {
    period: "10/04/2022 – 30/06/2022",
    title: "CERTIFIED SOC ANALYST 312-39 INFOSECURITY",
    provider: "INFOSECURITY",
    website: "https://infosecurity.al/",
    location: "Tirane, Albania",
  },
  {
    period: "17/04/2022 – 29/05/2022",
    title: "3CX ADVANCED CERTIFIED ENGINEER V18",
    provider: "3CX",
    website:
      "https://portal.3cx.com/share/certificate/OgrnY7wh8H?fbclid=IwAR3ohZ76TcOlKdp3UxYMMrID34C59OeeVdOmJb84mlnD4_ik2618hizk2fk",
  },
  {
    period: "04/05/2022 – 05/05/2022",
    title: "LOAD BALANCING & FAILOVER ON MIKROTIK",
    provider: "Udemy - Maher Haddad",
    website:
      "https://www.udemy.com/certificate/UC-44a5c6b3-514d-44ad-b9a8-8817ae63b83b/",
  },
  {
    period: "15/03/2022 – 17/04/2022",
    title: "3CX INTERMEDIATE CERTIFIED ENGINEER V18",
    provider: "3CX",
    website: "https://portal.3cx.com/share/certificate/APJSPEqGv9",
  },
  {
    period: "31/12/2021 – 15/03/2022",
    title: "3CX BASIC CERTIFIED ENGINEER V18",
    provider: "3CX",
    website: "https://portal.3cx.com/share/certificate/q33KqTTggl",
  },
  {
    period: "09/09/2021 – CURRENT",
    title: "MASTER IN CYBER SECIURITY",
    provider: "Universiteti Luarasi",
    location: "Tiranë, Albania",
    website: "https://luarasi-univ.edu.al/",
  },
  {
    period: "31/01/2022 – 16/02/2022",
    title: "FANVIL CERTIFIED IP PHONE PROFESSIONAL",
    provider: "Fanvil",
    website: "http://academy.fanvil.com",
  },
  {
    period: "24/01/2022 – 11/02/2022",
    title: "FANVIL CERTIFIED IP PHONE ASSOCIATE",
    provider: "Fanvil",
    website: "http://academy.fanvil.com",
  },
  {
    period: "COMPLETE PBX 5 BASIC TRAINING",
    title:
      "Xorcom Business Phone Systems, Hotel PBX, Hotel Phone Systems, Virtual PBX",
    address:
      "https://pbx-training.xorcom.com/certificates/3d5104d5c469938b8579b31d3026bcca/",
  },
  {
    period: "19/07/2021 – 24/08/2021",
    title: "LEV2-PC NDG LINUX ESSENTIALS",
    provider: "Netacad",
    website: "https://www.netacad.com",
  },
  {
    period: "FORTINET NETWORK SECURITY EXPERT LEVEL 2: CERTIFIED ASSOCIATE",
    title: "Fortinet",
    website:
      "https://training.fortinet.com/mod/customcert/verify_certificate.php",
  },
  {
    period: "FORTINET NETWORK SECURITY EXPERT LEVEL 1: CERTIFIED ASSOCIATE",
    title: "Fortinet NSE Institute",
    website:
      "https://training.fortinet.com/mod/customcert/verify_certificate.php?contextid=251439&code=Inr1xG6SM",
  },
  {
    period: "16/06/2020 – 18/06/2020",
    title: "MTCNA - MIKROTIK CERTIFIED NETWORK ASSOCIATE",
    provider: "Mikrotik Albania",
    location: "Tirane, Albania",
    website: "https://etronic.al/sq/",
  },
  {
    period: "30/04/2020 – 20/05/2020",
    title: "BASIC NETWORKING FOR RECORDERS",
    provider: "Hikvision",
    address: "Online",
    website: "www.hikvisionlearning.com",
  },
  {
    period: "09/10/2019 – 24/04/2020",
    title: "CCNA: ENTERPRISE NETWORKING, SECURITY, AND AUTOMATION",
    provider:
      "ASC | School Of Informatics - Cisco AlbaniaSchool of informatics",
    location: "Tirane, Albania",
    website: "https://www.schoolofinformatics.com/",
  },
  {
    period: "09/10/2015 – 24/07/2019",
    title: "AGRICULTURAL ENGINEERING, AGROMECHANISATION",
    provider: "Agricultural University of Tirana",
    address: "Rruga Paisi Vodica 1025, Tirana, 1001, Tirane, Albania",
  },
  {
    period: "31/05/2017 – 24/10/2017",
    title: "COMPUTER TECHNICIAN",
    provider: "Qender e Formimit Profesional (DRFPP Nr.1)",
    address: "Rruga Asim Vokshi, Tiranë, 1001, Tirane, Albania",
    website: "https://drfpp1.wordpress.com/",
  },
  {
    period: "30/04/2017 – 27/08/2017",
    title: "ELECTRONIC TECHNICIAN",
    provider: "Qender e Formimit Profesional (DRFPP Nr.1)",
    address: "Rruga Asim Vokshi, Tiranë, 1001, Tirane, Albania",
    website: "https://drfpp1.wordpress.com/",
  },
];

const TrainingList = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trainings.map((training, index) => (
        <View style={styles.item} key={index}>
          <Text style={styles.period}>{training.period}</Text>
          <Text style={styles.title}>{training.title}</Text>
          <Text style={styles.provider}>Provider: {training.provider}</Text>

          <TouchableHighlight
            underlayColor={colors.lightGray}
            onPress={() => {
              if (training.website) {
                handleLinkPress(training.website);
              }
            }}
          >
            <Text style={styles.website}>Website: {training.website}</Text>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.WhiteSmoke,
  },
  item: {
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
  period: {
    fontWeight: "bold",
    fontSize: sizes.secondary,
    marginBottom: 5,
  },
  title: {
    fontSize: sizes.third,
    marginBottom: 5,
  },
  provider: {
    fontSize: sizes.third,
    marginBottom: 2,
  },
  website: {
    fontSize: sizes.forth,
    color: "blue",
  },
});

export default TrainingList;
