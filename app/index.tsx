import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0); // Estado para el contador

  // Funciones para aumentar y disminuir el contador
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      {/* Mostrar el valor del contador */}
      <Text style={styles.counterText}>Contador: {count}</Text>

      {/* Botón para incrementar */}
      <Button title="Incrementar" onPress={increment} />

      {/* Espacio entre los botones */}
      <View style={{ height: 20 }} />

      {/* Botón para disminuir */}
      <Button title="Disminuir" onPress={decrement} />
    </View>
  );
}

// Estilos para los botones y el texto
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});