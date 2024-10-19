//Importa los componentes Button, View y Alert de la librería 'react-native'
import { Button, View, Alert } from 'react-native';

const createAlert = () => {
  Alert.alert(
    'Título de la alerta',
    'Este es el mensaje de la alerta',
    [
      {
        text: 'Cancelado!!',
        onPress: () => console.log('Presionaste cancelar!!'),
        style: 'cancel',
      },
      { text: 'okas lokas', onPress: () => console.log('OK Pressed') },
      { text: 'boton extra', onPress: () => console.log('Boton extra Pressed') },
    ],
    { cancelable: false, userInterfaceStyle: 'light' }
  );
};

const App = () => {
  return (
    <View style={{ marginTop: 100, marginLeft: 20, marginEnd: 20 }}>
      <Button color="green" title="Título de Ricardo" onPress={createAlert} />
    </View>
  );
};

export default App;
