// toggle this to create test location data
//import '../_mockLocation';

import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import useLocation from '../hooks/useLocation';

import { Context as LocationContext } from '../context/LocationContext';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording }
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
