import React from 'react';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../navigations/AppNavigator';

type ArticleScreenRouteProp = RouteProp<HomeStackParamList, 'Article'>;

type Props = {
  route: ArticleScreenRouteProp;
};


const ArticleScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  return (
    <>
      <WebView source={{ uri: article.url || '' }} />
    </>
  );
};

export default ArticleScreen;
