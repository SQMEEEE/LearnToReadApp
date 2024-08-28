import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GamesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Games</Text>
      <Text>Fun games to reinforce learning...</Text>
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

export default GamesScreen;