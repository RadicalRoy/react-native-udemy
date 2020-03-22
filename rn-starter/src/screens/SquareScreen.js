import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  let amount;

  switch (action.type) {
    case 'change_red':
      amount =
        action.payload < 0
          ? Math.max(state.red + action.payload, 0)
          : Math.min(state.red + action.payload, 255);
      return { ...state, red: amount };
    case 'change_green':
      amount =
        action.payload < 0
          ? Math.max(state.green + action.payload, 0)
          : Math.min(state.green + action.payload, 255);
      return { ...state, green: amount };
    case 'change_blue':
      amount =
        action.amount < 0
          ? Math.max(state.blue + action.payload, 0)
          : Math.min(state.blue + action.payload, 255);
      return { ...state, blue: amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color="red"
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
