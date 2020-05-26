import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const HomeScreen: React.FC<{ newsApiKey: string }> = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is HomeScreen</Text>
      <Text>{props.newsApiKey}</Text>
    </View>
  );
};

HomeScreen.defaultProps = {
  newsApiKey: Constants.manifest.extra.newsApiKey || 'not found'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen;