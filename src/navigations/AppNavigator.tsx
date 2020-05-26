import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CouponsScreen from '../screens/CouponsScreen';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'ホーム' }} />
        <Tab.Screen name="Coupons" component={CouponsScreen} options={{ tabBarLabel: 'クーポン' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
