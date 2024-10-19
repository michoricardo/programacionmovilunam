//Importa todos los componentes de la librería 'react'
import * as React from 'react';
//Importa los componentes Button y View de la librería 'react-native'
import { Button, View } from 'react-native';

const App = () => {
  return (
    <View style={{ marginTop: 100, marginLeft: 20, marginEnd: 20 }}>
      <Button title="SOY UN BOTON" />
    </View>
  );
};

export default App;
