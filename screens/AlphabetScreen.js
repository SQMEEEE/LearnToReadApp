import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlphabetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alphabet</Text>
      <Text>A, B, C, D, ...</Text>
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

export default AlphabetScreen;
