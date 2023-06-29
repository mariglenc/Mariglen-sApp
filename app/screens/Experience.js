import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';
import sizes from '../config/sizes';

const Experience = () => {
  
  const workExperiences = [
    {
      period: '01/09/2022 – CURRENT',
      location: 'Tirane, Albania',
      employer:'SELF-EMPLOYED',
      title: 'FREELANCE WEB DEVELOPER ',
      description: 'Worked on front-end and back-end development, gaining proficiency in JavaScript libraries and frameworks such as React and Node.js .\nDeveloped custom web applications, e-commerce solutions, and content management systems using PHP libraries like Laravel. \nBuilt mobile applications with React Native, integrating backend APIs and implementing custom functionality .\nCollaborated with clients and team members, providing updates, resolving issues, and delivering projects.',
    },
    {
      period: '01/01/2023 – 30/06/2023',
      location: 'Tirane, Albania',
      employer:'KETRI WEB',
      title: 'FULL STACK INTERNSHIP',
      description: 'Worked extensively with PHP using the Ketri framework to develop and maintain web applications. \nGained proficiency in JavaScript, jQuery, and React Native. Demonstrated skills in version control using Git and GitHub. \nConfigured Apache virtual hosts for local development. \nAssisted with troubleshooting, debugging, and maintaining computers, printers, and other devices.',
    },
    {
      period: '30/06/2021 – 30/06/2023',
      location: 'Tirane, Albania',
      employer:'INTERNATIONAL MAARIF SCHOOLS OF ALBANIA',
      title: 'IT SPECIALIST ',
      description: 'Worked as a network administrator and engineer. \nConfigured and managed Mikrotik routers, switches, and home routers. \nInstalled and maintained CCTV systems. \nProvided help desk support for printers and applications. \nTroubleshot and repaired hardware and software issues.',
    },
    {
      period: '09/09/2021 – 24/12/2021',
      location: 'Tirane, Albania',
      employer:'SCHOOL OF INFORMATICS',
      title: 'IT TRAINER ',
      description: 'Part-time trainer for CCNA ITN course.',
    },
    {
      period: '31/10/2020 – 06/2021',
      location: 'Tirane, Albania',
      employer:'ULTRACOM SHPK',
      title: 'IT SPECIALIST',
      description: 'Worked as a fiber technician, system administrator, and CCTV technician. \nInstalled and configured fiber optic networks, ONT, and switches. \nMaintained and repaired computers, printers, and other devices. \nInstalled and configured CCTV systems.',
    },
    {
      period: '31/12/2019 – 14/10/2020',
      location: 'Tirana, Albania',
      employer: 'GKAM BUSSINESS CENTER',
      title: 'IT SPECIALIST',
      description: 'Network administrator and engineer. \nConfigured and managed Mikrotik routers, switches, and home routers. \nBuilt new networks and managed them remotely. \nConducted performance tests, firmware updates, and troubleshooting. \nInstalled and configured CCTV systems, performed regular maintenance, and provided help-desk support.',
    },
    {
      period: '09/11/2018 – 07/02/2019',
      location: 'Haidmühle, Germany',
      employer: 'LANDWIRTSCHAFTLICHER BETRIEB DER FAMILIE ALEXANDER MADL',
      title: 'AGRICULTURAL INTERNSHIP',
      description: 'Participated in a vocational internship on an agricultural farm.',
    },
    {
      period: '09/05/2018 – 06/08/2018',
      location: 'Inning am Ammersee, Germany',
      employer: 'LANDWIRTSCHAFTLICHER BETRIEB DER FAMILIE HERBERT BREUER',
      title: 'AGRICULTURAL INTERNSHIP',
      description: 'Participated in a vocational internship on an agricultural farm.',
    },
    {
      period: '11/05/2015 – 14/11/2017',
      location: 'Tirana, Albania',
      employer: 'COMPUTER SERVICE',
      title: 'COMPUTER SERVICE AND REPAIR TECHNICIAN',
      description: 'Performed hardware installations, operating system installations, application installations, maintenance, and repairs. \nInstalled and configured network devices, designed and installed networks, and provided technical support to clients.',
    },
  ];
  
  

  return (
    <ScrollView style={styles.container}>
      {workExperiences.map((experience, index) => (
        <View key={index} style={styles.experienceItem}>
          <Text style={styles.title} >{experience.title}</Text>
          <Text style={styles.employer} >{experience.employer}</Text>
          <Text style={styles.period} >{experience.period}</Text>
          <Text style={styles.location} >{experience.location}</Text>
          <Text style={styles.description} >{experience.description}</Text>
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
  experienceItem: {
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
  title: {
    fontSize: sizes.primary,
    fontWeight: 'bold',
  },
  employer: {
    fontSize: sizes.secondary,
    marginBottom: 8,
  },
  period: {
    fontSize:sizes.third,
    fontStyle: 'italic',
  },
  location: {
    fontSize:sizes.third,
    marginBottom: 8,
  },
  description:{
    fontSize:sizes.third,
  }
});

export default Experience;
