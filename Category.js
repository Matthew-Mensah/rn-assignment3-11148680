import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Category = ({ name, icon }) => (
  <View style={styles.categoryContainer}>
    <Image source={icon} style={styles.categoryIcon} />
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default Category;
