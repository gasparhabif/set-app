/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from '../src/screens/Login';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaBg}>
        <Login />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // Dark: #34495E
  // Light: #E4F2FE
  safeAreaBg: {
    backgroundColor: '#34495E',
  },
});

export default App;
