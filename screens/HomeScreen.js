import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn to Read</Text>
      <Button
        title="Learn Alphabet"
        onPress={() => navigation.navigate('Alphabet')}
      />
      <Button
        title="Learn Phonics"
        onPress={() => navigation.navigate('Phonics')}
      />
      <Button
        title="Reading Exercises"
        onPress={() => navigation.navigate('ReadingExercises')}
      />
      <Button
        title="View Progress"
        onPress={() => navigation.navigate('Progress')}
      />
      <Button
        title="Play Games"
        onPress={() => navigation.navigate('Games')}
      />
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

export default HomeScreen;
