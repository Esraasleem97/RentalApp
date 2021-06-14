import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/Navigations/stackNav";

export default function App() {
  return (

      <NavigationContainer>
          <StackNav/>
      </NavigationContainer>

  );
}

