import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ClientDashboard from './src/screens/client/Dashboard';
import DriverDashboard from './src/screens/driver/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
        <Stack.Screen name="DriverDashboard" component={DriverDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;