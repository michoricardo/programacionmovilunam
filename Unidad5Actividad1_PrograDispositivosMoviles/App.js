import * as React from 'react';
import { Button, View, StyleSheet, TextInput, Alert, FlatList, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

const App = () => {
  const [todo, onChangeTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://appexpressunam-dispmoviles.onrender.com/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      Alert.alert('Error', 'Hubo un problema al obtener la lista de tareas.');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://appexpressunam-dispmoviles.onrender.com/agrega_todo', {
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
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchTodos(); // Fetch todos when the component mounts
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.todoItem}>
      <Text style={styles.todoText}>{item.todo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCn7WHoQ4zt_ok7rOlWgq9UHFoqbRGzmz4A&s' }}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Agregar nueva tarea"
        textContentType="default"
        keyboardType="default"
        onChangeText={(text) => onChangeTodo(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => addTodo()}>
        <Text style={styles.buttonText}>Agregar Todo</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    padding: 8,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  todoItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  todoText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
});

export default App;