import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, setErrMessage] = useState('');
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'los angeles'
        }
      });
      setRestaurants(response.data.businesses);
      setErrMessage('');
    } catch (err) {
      console.log(err);
      setErrMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, restaurants, errMessage];
};
