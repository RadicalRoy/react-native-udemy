import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + 1 };
    case 'decrease':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = props => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase' });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease' });
        }}
      />
      <Text>Counter Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
