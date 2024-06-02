import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Button, FlatList } from 'react-native';
import Category from './Category';
import Task from './Task';

const App = () => {
  const categories = [
    { id: '1', name: 'Exercise', icon: require('./assets/exercise.png') },
    { id: '2', name: 'Study', icon: require('./assets/study.png') },
    { id: '3', name: 'Code', icon: require('./assets/code.png') },
    { id: '4', name: 'Cook', icon: require('./assets/cook.png') },
    { id: '6', name: 'Shop', icon: require('./assets/shop.png') },
    { id: '7', name: 'Read', icon: require('./assets/read.png') },
    { id: '8', name: 'Relax', icon: require('./assets/relax.png') },
  ];

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Go for a run', category: 'Exercise', completed: false },
    { id: '2', text: 'Study React Native', category: 'Study', completed: false },
    { id: '3', text: 'Work on project', category: 'Code', completed: false },
    { id: '4', text: 'Cook dinner', category: 'Cook', completed: false },
    { id: '5', text: 'Clean the house', category: 'Clean', completed: false },
    { id: '6', text: 'Go shopping', category: 'Shop', completed: false },
    { id: '7', text: 'Read a book', category: 'Read', completed: false },
    { id: '8', text: 'Meditate', category: 'Relax', completed: false },
    { id: '9', text: 'Exercise for 30 mins', category: 'Exercise', completed: false },
    { id: '10', text: 'Learn about hooks', category: 'Study', completed: false },
    { id: '11', text: 'Fix bugs in the code', category: 'Code', completed: false },
    { id: '12', text: 'Bake a cake', category: 'Cook', completed: false },
    { id: '13', text: 'Clean the garage', category: 'Clean', completed: false },
    { id: '14', text: 'Buy groceries', category: 'Shop', completed: false },
    { id: '15', text: 'Finish reading novel', category: 'Read', completed: false },
  ]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { id: (tasks.length + 1).toString(), text: task, category: 'General', completed: false }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MATTHEW MENSAH'S DAILY ROUTINE </Text>
      <ScrollView horizontal style={styles.categoryScroll}>
        {categories.map(category => (
          <Category key={category.id} name={category.name} icon={category.icon} />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
      <FlatList 
        data={tasks}
        renderItem={({ item }) => <Task text={item.text} category={item.category} completed={item.completed} />}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  categoryScroll: {
    marginVertical: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  textInput: {
    flex: 1,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40
  },
  taskList: {
    marginTop: 20
  },
});

export default App;
