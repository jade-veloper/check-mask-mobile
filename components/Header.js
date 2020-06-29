import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>CHECK MASK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    color: '#FFFFFF',
    backgroundColor: '#4dabf7',
    fontSize: 32,
    textAlign: 'left',
  },
});

export default Header;
