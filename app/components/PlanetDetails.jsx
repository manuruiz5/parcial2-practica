import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

const PlanetDetails = ({ route, navigation }) => {
  const { id } = route.params; // Obtiene el ID del planeta desde los parámetros de navegación
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`http://161.35.143.238:8000/mruiz/${id}`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.error("Error fetching planet details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetDetails();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!planet) {
    return (
      <View style={styles.container}>
        <Text>El planeta no existe o los datos no están disponibles.</Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: planet.image }} style={styles.image} />
      <Text style={styles.name}>{planet.name}</Text>
      <Text style={styles.description}>{planet.description}</Text>
      <Text style={styles.moons}>Lunas: {planet.moons}</Text>
      {planet.moon_names.length > 0 && (
        <Text style={styles.moonList}>
          Nombres de las lunas: {planet.moon_names.join(", ")}
        </Text>
      )}
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

PlanetDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  moons: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  moonList: {
    fontSize: 14,
    marginBottom: 20,
  },
});

export default PlanetDetails;
