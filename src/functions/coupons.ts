import axios from 'axios';

/**
 * Get coupon data from API
 */
export const fetchCouponDataAsync = async () => {
  let { data } = await axios.get('');
  return data;
};
