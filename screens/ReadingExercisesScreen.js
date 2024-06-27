import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReadingExercisesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reading Exercises</Text>
      <Text>Simple sentences to read...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ReadingExercisesScreen;
