import * as React from 'react';
import { Button, View, StyleSheet, TextInput, Alert, FlatList, Text } from 'react-native';

const App = () => {
  const [todo, onChangeTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://shadowy-shadow-4wq45j95wx639wp-3000.app.github.dev/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      Alert.alert('Error', 'Hubo un problema al obtener la lista de tareas.');
    }
  };

  const addTodo = async () => {
    try {
      const response = await fetch('https://shadowy-shadow-4wq45j95wx639wp-3000.app.github.dev/agrega_todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todo }),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log('Todo added:', data);
        Alert.alert('Éxito', '¡Todo agregado exitosamente!');
        fetchTodos(); // Fetch the updated list of todos
      } else {
        console.error('Error adding todo:', response.statusText);
        Alert.alert('Error', 'Hubo un problema al agregar el todo.');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
      Alert.alert('Error', 'Hubo un problema al agregar el todo.');
    }
  };

  React.useEffect(() => {
    fetchTodos(); // Fetch todos when the component mounts
  }, []);

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

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.todo}</Text>}
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
