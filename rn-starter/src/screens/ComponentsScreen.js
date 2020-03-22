import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const componentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>I am Boxxie you see!</Text>
      <Text style={styles.subHeaderStyle}>Boxxie Rulez!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default componentsScreen;
