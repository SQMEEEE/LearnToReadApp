import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AlphabetScreen from './screens/AlphabetScreen';
import PhonicsScreen from './screens/PhonicsScreen';
import ReadingExercisesScreen from './screens/ReadingExercisesScreen';
import ProgressScreen from './screens/ProgressScreen';
import GamesScreen from './screens/GamesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alphabet" component={AlphabetScreen} />
        <Stack.Screen name="Phonics" component={PhonicsScreen} />
        <Stack.Screen name="ReadingExercises" component={ReadingExercisesScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Games" component={GamesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

