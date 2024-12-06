import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './src/components/NavBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Room from './src/screens/Room';
import { View } from 'react-native';
import Login from './src/screens/login';
import Register from './src/screens/register';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import WebSocketProvider from './src/utils/WebSocketProvider';
import Routine from './src/screens/routine';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'roboto-bold': require('./assets/fonts/roboto-bold.ttf'),
          'roboto-regular': require('./assets/fonts/roboto-regular.ttf')
        });
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      } catch(err) {
        console.warn(err);
      }
    }
    
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  
  return (
    <WebSocketProvider>
      <NavigationContainer>
        <View style={{ 
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: '#000'}}
        />
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          <Stack.Screen name='Navbar' options={{ headerShown: false }}>
            {props => (
              <Navbar />
            )}
          </Stack.Screen>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Routine' options={{ headerShown: false }}>
            {props => (
              <Routine id={props.route.params.routine} />
            )}
          </Stack.Screen>
          <Stack.Screen name='Room' options={{ headerShown: false }}>
            {props => (
              <Room id={props.route.params.room} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </WebSocketProvider>
  );
}
