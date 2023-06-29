import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import projectsData from "../assets/projectsData"; // Assuming you have project data

const Projects = () => {
  const renderProjectItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        style={styles.projectImage}
        source={{uri:item.image}}
      />

      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.projectDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={projectsData}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

export default Projects;

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  gridContainer: {
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "48%",
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 10,
    padding: 10,
  },
  projectImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  viewButton: {
    marginTop:'auto',
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 8,
  },
  viewButtonText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
};
