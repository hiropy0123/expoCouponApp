import axios, { AxiosResponse } from 'axios';
import { Article } from '../types/article';

/**
 * Get coupon data from API
 */
export const fetchArticlesAsync = async (url: string) => {
  const response: AxiosResponse<{ articles: Article[] }> = await axios.get<{
    articles: Article[];
  }>(url);
  return response.data.articles;
};
