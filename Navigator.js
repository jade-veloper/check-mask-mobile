import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import ListScreen from './screens/ListScreen';

const TabNavigator = createBottomTabNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="md-list-box" size={25} color={tintColor} />;
        },
        tabBarLabel: '목록',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4dabf7',
      inactiveTintColor: '#9E9E9E',
      borderTopColor: '#BDBDBD',
      backgroundColor: '#FFFFFF',
    },
  }
);

export default createAppContainer(TabNavigator);
