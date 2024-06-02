import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ text, category, completed }) => (
  <View style={styles.taskContainer}>
    <Text style={completed ? styles.taskTextCompleted : styles.taskText}>{text}</Text>
    <Text style={styles.taskCategory}>{category}</Text>
  </View>
);

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#ced4da',
    borderBottomWidth: 1
  },
  taskText: {
    fontSize: 18
  },
  taskTextCompleted: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#6c757d'
  },
  taskCategory: {
    fontSize: 14,
    color: '#6c757d'
  }
});

export default Task;
