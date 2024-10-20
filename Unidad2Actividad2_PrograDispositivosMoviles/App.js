// Importa todos los componentes de la librería 'react'
import * as React from 'react';
// Importa los componentes Button, View, StyleSheet, TextInput y Alert de la librería 'react-native'
import { Button, View, StyleSheet, TextInput, Alert } from 'react-native';

const App = () => {
  // Se declara una variable de estado
  // Revisar https://reactjs.org/docs/hooks-state.html
  const [todo, onChangeTodo] = React.useState('');

const addTodo = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: todo, completed: false }),
    });
    const data = await response.json();
    console.log('Todo added:', data);
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="todo"
        textContentType="default"
        keyboardType="default"
        onChangeText={(text) => onChangeTodo(text)}
      />

      <Button
        style={styles.button}
        title="Agregar todo"
        onPress={() => addTodo()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginEnd: 20,
  },
  textInput: {
    height: 40,
    padding: 8,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {},
});

export default App;
