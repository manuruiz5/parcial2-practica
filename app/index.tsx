import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlanetList from "./components/PlanetList";
import Home from "./components/Home";
import PlanetDetails from "./components/PlanetDetails";

const PlanetsContext = React.createContext({ planets: [] });


const index = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {

        const response = await fetch("http://161.35.143.238:8000/mruiz");
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };
    fetchPlanets();
  }, []);

  
 
  const handlePressPlanet = async (id: string) => {
    console.log("Planet selected with ID:", id);
    try {
      const response = await fetch(`http://161.35.143.238:8000/mruiz/${id}`);
      if (!response.ok) {
        throw new Error("Error fetching planet details");
      }
      const planet = await response.json();
      console.log("Planet details:", planet);
      // Aquí puedes hacer algo con los detalles del planeta, como navegar a otra pantalla.
    } catch (error) {
      console.error("Error fetching planet details:", error);
    }
  };
 


  return (
    <PlanetsContext.Provider value={{ planets }}>
      <View style={styles.container}>
        <Home onPressPlanet={handlePressPlanet} />
      </View>
    </PlanetsContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
export { PlanetsContext };
export default index;
