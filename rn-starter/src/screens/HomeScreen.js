import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>I Liek Turtles</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter State Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color State Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square State Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text State Demo"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box State Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
