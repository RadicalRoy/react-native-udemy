import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer D_NS-CYuTnTKXPzda3498QZ5TyJPghDSmiT1_VvD_RuI37fB55PC5LCa4I_rlJQYABmO8517WGafkVj3sWJAaw11OJFH_PMaGzX7L9XW5eeE8kC34etdZQJ-t9FrXnYx'
  }
});
