import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const PlanetList = ({ planets, onPressPlanet }) => {
  return (
    <View style={styles.container}>
      {planets.map((planet) => (
        <TouchableOpacity
          key={planet.id}
          style={styles.planetBox}
          onPress={() => onPressPlanet(planet.id)}
        >
          <Image source={{ uri: planet.image }} style={styles.planetImage} />
          <Text style={styles.planetName}>{planet.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

PlanetList.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onPressPlanet: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  planetBox: {
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  planetImage: { width: 100, height: 100, borderRadius: 50 },
  planetName: { marginTop: 8, fontSize: 16, fontWeight: "bold" },
});

export default PlanetList;
