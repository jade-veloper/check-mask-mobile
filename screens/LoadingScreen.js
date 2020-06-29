import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CHECK MASK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#4dabf7',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default LoadingScreen;
