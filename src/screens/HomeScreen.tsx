import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';
import { Article } from '../types/article';
import { fetchArticlesAsync } from '../functions/articles';

const HomeScreen: React.FC<{ newsApiKey: string }> = (props) => {
  const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${props.newsApiKey}`;
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const data = await fetchArticlesAsync(URL);
      setArticles(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            author={item.author || ''}
            imageUrl={item.urlToImage || ''}
            date={item.publishedAt || ''}
            onPress={() => { alert(item.title) }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

HomeScreen.defaultProps = {
  newsApiKey: Constants.manifest.extra.newsApiKey || 'not found'
}



export default HomeScreen;