import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import CouponsScreen from '../screens/CouponsScreen';
import { Entypo } from '@expo/vector-icons';
import { Article } from '../types/article';

const Tab = createBottomTabNavigator();

export type HomeStackParamList = {
  Home: undefined;
  Article: { article: Article };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{ activeTintColor: '#e63f7d', inactiveTintColor: '#999999' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'circle';
            // switch icons by route name
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Coupons') {
              iconName = 'ticket';
            }
            return <Entypo name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel: 'ホーム' }} />
        <Tab.Screen name="Coupons" component={CouponsScreen} options={{ tabBarLabel: 'クーポン' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
