import React, { useContext } from 'react';
import { View, Text, Button,TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';
import PlanetsList from './PlanetList';
import { PlanetsContext } from '../index';
import PropTypes from 'prop-types'; 

const Home = ({onPressPlanet}) => {
  const { planets } = useContext(PlanetsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planetario UCU</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.cardButton, { backgroundColor: '#A8D5BA' }]}
          onPress={() => alert('Agregar planeta')}
        >
          <Text style={styles.cardButtonText}>Agregar Planeta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cardButton, { backgroundColor: '#A7C7E7' }]}
          onPress={() => alert('Ordenar planeta')}
        >
          <Text style={styles.cardButtonText}>Ordenar Planeta</Text>
        </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
      <PlanetsList planets={planets} onPressPlanet={onPressPlanet}  />
      </ScrollView>
    </View>
  );
};

Home.propTypes = {
  onPressPlanet: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardButton: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Para Android
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Texto en negro
  },
  scrollContent: {
    paddingBottom: 20, // Espacio adicional para el scroll
  },
});

export default Home;
