import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';
import { Article } from '../types/article';
import { fetchArticlesAsync } from '../functions/articles';
import { HomeStackParamList } from '../navigations/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  newsApiKey: string;
};

const HomeScreen: React.FC<Props> = ({ navigation, newsApiKey }) => {
  const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${newsApiKey}`;
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const data = await fetchArticlesAsync(URL);
      setArticles(data);
    } catch (error) {
      console.error(error);
    }
  };

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
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

HomeScreen.defaultProps = {
  newsApiKey: Constants.manifest.extra.newsApiKey || 'not found',
};

export default HomeScreen;
