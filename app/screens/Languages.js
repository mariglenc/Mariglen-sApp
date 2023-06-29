import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';
import sizes from '../config/sizes';

const Languages = () => {
  return (
    <View style={styles.container}>

      <View style={styles.skillRow}>
        <Text style={styles.language}>Albanian (Mother Tongue)</Text>
      </View>

      <View style={styles.skillRow}>
        <Text style={styles.language}>English</Text>
        <Text style={styles.level}>B2</Text>
        <Text style={styles.levelDescription}>
          Understanding: B2 | Speaking: B2 | Writing: B2 | Listening: B2 | Reading: B2
        </Text>
      </View>

      <View style={styles.skillRow}>
        <Text style={styles.language}>German</Text>
        <Text style={styles.level}>A1</Text>
        <Text style={styles.levelDescription}>
          Understanding: A1 | Speaking: A1 | Writing: A1 | Listening: A1 | Reading: A1
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.WhiteSmoke,
  },
  skillRow: {
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
  language: {
    fontSize: sizes.primary,
    fontWeight: 'bold',
    color: colors.Gray20,
    marginBottom: 8,
  },
  level: {
    fontSize: sizes.secondary,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.lightBlue,
  },
  levelDescription: {
    fontSize: sizes.third,
    color: colors.secondGray,
  },
});

export default Languages;
