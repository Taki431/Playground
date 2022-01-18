import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TalkScreen from "./src/screens/TalkScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

function TalkStack() {
  return (
    <Stack.Navigator
      initialRouteName="App_to_Home"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }
      }>
      <Stack.Screen
        name="App_to_Home"
        component={TalkScreen}
        options={{
          title: "Movie Time",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />
      <Stack.Screen
        name="Home_to_Details"
        component={DetailsScreen}
        options={ ( {route}) => ({title: route.params.movie.title})}
      />
      <Stack.Screen
        name="Details_to_Details"
        component={DetailsScreen}
        options={ ( {route}) => ({title: route.params.movie.title})}
      />
      <Stack.Screen
        name="BigImageView"
        component={ImageScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName = "Feed"
        screenOptions={{
            activeTintColor: "blue",
        }}>
        <Tab.Screen
          name ="Talk"
          component={TalkStack}
          options={{
            tabBarLabel: 'Talk',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name = "account-voice" color = {color} size = {size} />
            ),
          }}
          />
        <Tab.Screen
          name="Playground"
          component={TalkStack}
          options={{
            tabBarLabel: 'Playground',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name= "playground-slide" color = {color} size = {size} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Mates"
          component={TalkStack}
          options={{
            tabBarLabel: 'Mates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="handball" color = {color} size = {size} /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
