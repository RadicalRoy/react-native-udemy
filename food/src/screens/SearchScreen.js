import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useRestaurants from '../hooks/useRestaurants';

import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantList';

import yelp from '../api/yelp';

const SearchScreen = ({}) => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errMessage] = useRestaurants();

  const filterRestaurantsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}

      <ScrollView>
        <RestaurantsList
          restaurants={filterRestaurantsByPrice('$')}
          title="Cost Effective"
        />
        <RestaurantsList
          restaurants={filterRestaurantsByPrice('$$')}
          title="Bit Pricier"
        />
        <RestaurantsList
          restaurants={filterRestaurantsByPrice('$$$')}
          title="Big Spender!"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
