import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../../Screens/Home/Home";
import Preload from '../../Screens/Preload/Preload';
import Login from '../../Screens/Login/Login';
import Register from '../../Screens/Register/Register';
import Appoiments from "../../Screens/Appoiments/Appoiments";
import AppoimentsConfirm from '../../Screens/AppoimentsConfirm/AppoimentsConfirm';
import Barber2 from '../../Screens/Barbeiro.v2/BarberV2';
import favorites from '../../Screens/Favorites/Favorites'
import attendance from '../../Screens/Attendance/Attendance'
import search from '../../Screens/Search/Search'

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Appoiments" component={Appoiments} options={{headerShown: false}}/>
        <Stack.Screen name="AppoimentsConfirm" component={AppoimentsConfirm} options={{headerShown: false}}/>
        <Stack.Screen name="attendance" component={attendance} options={{headerShown: false}}/>
        <Stack.Screen name="Barber" component={Barber2} options={{headerShown: false}}/>
        <Stack.Screen name="favorites" component={favorites} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Preload" component={Preload} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="search" component={search} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;