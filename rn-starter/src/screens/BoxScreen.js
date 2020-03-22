import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.view1Style}>
        <Text style={styles.text1Style}>Crying Guy</Text>
      </View>
      <View style={styles.view2Style}>
        <Text style={styles.text2Style}>Jerk Guy with Oliver</Text>
      </View>
      <View style={styles.view3Style}>
        <Text style={styles.text3Style}>Homeless Guy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  view1Style: {
    backgroundColor: 'cyan',
    opacity: 140,
    height: 100,
    width: 100
  },
  view2Style: {
    backgroundColor: 'magenta',
    alignSelf: 'center',
    height: 100,
    width: 100,
    alignSelf: 'flex-end'
  },
  view3Style: {
    backgroundColor: 'teal',
    height: 100,
    width: 100
  },
  text1Style: {
    ...StyleSheet.absoluteFillObject
  },
  text2Style: {
    ...StyleSheet.absoluteFillObject,
    fontSize: 18
  },
  text3Style: {
    ...StyleSheet.absoluteFillObject
  }
});

export default BoxScreen;
