import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from './src/screens/MovieListScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import { Film } from './src/types/types';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MovieList">
          <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'Star Wars Movies' }} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ title: 'Movie Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
