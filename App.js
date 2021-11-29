
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import Header from './src/component/Header';
import Conversion from './src/screens/Conversion';
import Length from './src/screens/Length';
import Temperature from './src/screens/Temperature';
import Weight from './src/screens/Weight';
const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
      }}>
        <Stack.Screen
          name="Welcome" component={WelcomeScreen} options={{ headerTitle: (props) => <Header {...props} /> }} />
        <Stack.Screen
          name="Conversion" component={Conversion} />
        <Stack.Screen
          name="Length" component={Length} options={{ headerTitle: (props) => <Header {...props} /> }} />
        <Stack.Screen
          name="Temperature" component={Temperature} options={{ headerTitle: (props) => <Header {...props} /> }} />
        <Stack.Screen
          name="Weight" component={Weight} options={{ headerTitle: (props) => <Header {...props} /> }} />

      </Stack.Navigator>

    </NavigationContainer >
  )

}

export default App;
