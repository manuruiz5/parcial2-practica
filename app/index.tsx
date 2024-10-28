import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Index() {
  const [inputText, setInputText] = useState(''); // Estado para el texto ingresado

  return (
    <View style={styles.container}>
      {/* TextInput para capturar el texto del usuario */}
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí..."
        value={inputText}
        onChangeText={setInputText} // Actualiza el estado con el texto ingresado
      />

      {/* Mostrar el texto ingresado debajo del campo de entrada */}
      <Text style={styles.resultText}>Texto ingresado: {inputText}</Text>
    </View>
  );
}

// Estilos para el campo de texto y el resultado
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%', // Ocupar el ancho disponible
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
