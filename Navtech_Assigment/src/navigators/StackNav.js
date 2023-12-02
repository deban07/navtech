import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../pages/Main';
import Admin from '../Section/Admin';
import User from '../Section/User';
import Test from '../pages/Test';
import ShoePage from '../pages/ShoePage';

const StackNav = props => {
  const Stack = createStackNavigator();
  const Screens = {
    Main: Main,
    Admin:Admin,
    User:User,
    Test:Test,
    ShoePage:ShoePage
  };
  const mytheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    },
  };
  return (
    <NavigationContainer theme={mytheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({
          ...Screens,
        }).map(([wel, com]) => (
          <Stack.Screen name={wel} component={com} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
