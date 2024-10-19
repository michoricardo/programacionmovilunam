import React, { useState } from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  const [showImage, setShowImage] = useState(false); // Estado para controlar la visibilidad de la imagen

  return (
    <View style={styles.container}>
      {/* Primer Pressable */}
      <Pressable style={styles.button} onPress={() => alert('Te ha presionado: El inge')}>
        <Text style={styles.buttonText}>Ricardo</Text>
      </Pressable>

      {/* Segundo Pressable para mostrar/ocultar la imagen */}
      <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'center',backgroundColor: 'black' }}>
        <Pressable style={styles.button_hidden}onPress={() => setShowImage(!showImage)}>
          <Text style={styles.buttonText}>N0 me presiones -.- </Text>
        </Pressable>

        {/* Condicional para mostrar la imagen */}
        {showImage && (
          <Image
            //source={{ uri: 'https://placekitten.com/200/200' }} // Imagen desde una URL
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYD6VXh7HOdRj2Cgoubf7tz-GHmTPhxXkpA&s' }} // Imagen desde una URL
            style={{ width: 300, height: 300, marginTop: 20 }} // Estilo sencillo para la imagen
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 10,
  },
  button_hidden: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
