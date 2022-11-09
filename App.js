import {
  SafeAreaView
} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import tw from 'tailwind-react-native-classnames';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={tw`flex-1`}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1`}>

            <Stack.Navigator>
              <Stack.Screen
                options={{
                  headerShown: false
                }}
                name="HomeScreen" component={HomeScreen} />
              <Stack.Screen
                options={{
                  headerShown: false
                }}
                name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}