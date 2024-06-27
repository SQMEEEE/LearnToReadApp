import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PhonicsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phonics</Text>
      <Text>A: "ah", B: "buh", C: "cuh", ...</Text>
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

export default PhonicsScreen;
