import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OfertasScreen from './src/screens/OfertasScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Ofertas" component={OfertasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

