import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import BottomTabNavigator from './navigation/TabNavigator';
import { AuthStackNavigator } from './navigation/StackNavigator';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Auth" component = {AuthStackNavigator}/>        
       <Stack.Screen
         name="BottomTab"
         component = {BottomTabNavigator}
         options = {{headerShown: false}}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
      /*
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Dating" component={DatingScreen} />
      </Stack.Navigator>
      <Tab.Navigator
       initialRouteName = "Feed"
       screenOptions={{
           activeTintColor: "blue",
       }}>
         <Tab.Screen name ="Bottom" component={BottomTabScreen}/>
      </Tab.Navigator>
      */
