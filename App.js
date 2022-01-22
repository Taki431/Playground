import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TalkScreen from "./src/screens/TalkScreen";
import MateScreen from "./src/screens/MateScreen";
import PlayScreen from "./src/screens/PlayScreen";
import DatingScreen from "./src/screens/DatingScreen";
import MyProfileScreen from "./src/screens/MyProfileScreen";
import PurchaseScreen from "./src/screens/Purchase";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

function TalkStack() {
  return (
    <Stack.Navigator
      initialRouteName="App_to_Talk"
      screenOptions={
        {
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }
      }>
      <Stack.Screen
        name="App_to_Talk"
        component={TalkScreen}
        options={{
          title: "Talk",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />
    </Stack.Navigator>
  );
}

function MateStack() {
  return (
    <Stack.Navigator
      initialRouteName="App_to_Mate"
      screenOptions={
        {
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }
      }>
      <Stack.Screen
        name="App_to_Mate"
        component={MateScreen}
        options={{
          title: "Mate",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />
    </Stack.Navigator>
  );
}

function PlayStack() {
  return (
    <Stack.Navigator
      initialRouteName="App_to_Mate"
      screenOptions={
        {
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }
      }>
      <Stack.Screen
        name="App_to_Mate"
        component={PlayScreen}
        options={{
          title: "Mate",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />
    </Stack.Navigator>
  );
}

function DatingStack() {
  return (
    <Stack.Navigator
      initialRouteName="App_to_Mate"
      screenOptions={
        {
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }
      }>
      <Stack.Screen
        name="App_to_Mate"
        component={DatingScreen}
        options={{
          title: "Dating",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />
      <Stack.Screen
        name="Dating_to_MyProfile"
        component={MyProfileScreen}
        options={{
          title: "My Profile",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />      
      <Stack.Screen
        name="Dating_to_Purchase"
        component={PurchaseScreen}
        options={{
          title: "Purchase",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
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
          component={PlayStack}
          options={{
            tabBarLabel: 'Playground',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name= "ticket" color = {color} size = {size} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Mates"
          component={MateStack}
          options={{
            tabBarLabel: 'Mates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="handball" color = {color} size = {size} /> 
            ),
          }}
        />
        <Tab.Screen
          name = "Dating" 
          component={DatingStack}
          options={{
            tabBarLabel: 'Dating',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="human-male-female" color = {color} size = {size} /> 
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
  textstyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },  
});
