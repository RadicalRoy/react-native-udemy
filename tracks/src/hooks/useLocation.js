import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, onLocationUpdate) => {
  const [err, setErr] = useState(null);
  /*
    -useEffect should update on any props or state 
    that it or its helper functions depends on. 
    In this case the callback onLocationUpdate, and shouldTrack boolean

    -Additionally, helper functions like startWatching that are called within
    useEffect that depend on props/state should also be defined within.
  */
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          location => {
            onLocationUpdate(location);
            setErr(null);
          }
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, onLocationUpdate]);

  return [err];
};
