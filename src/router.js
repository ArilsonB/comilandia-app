import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Main, Search, Recipe, FavRecipes} from './pages';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="none"
      screenOptions={{
        headerForceInset: {top: 'never', bottom: 'never'},
        safeAreaInsets: {top: 0, bottom: 0},
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="FavRecipes" component={FavRecipes} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
