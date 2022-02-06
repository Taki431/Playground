import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TalkScreen from "../src/screens/TalkScreen";
import MateScreen from "../src/screens/MateScreen";
import PlayScreen from "../src/screens/PlayScreen";
import DatingScreen from "../src/screens/DatingScreen";
import MyProfileScreen from "../src/screens/MyProfileScreen";
import PurchaseScreen from "../src/screens/Purchase";
import ProfilesScreen from "../src/screens/ProfilesScreen";
import MoreScreen from "../src/screens/MoreScreen";
import AuthScreen from "../src/screens/AuthScreen";

const Stack = createStackNavigator();

function TalkStackNavigator() {
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
  
function MateStackNavigator() {
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
  
function PlayStackNavigator() {
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
  
function DatingStackNavigator() {
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
      <Stack.Screen
        name="Dating_to_Profiles"
        component={ProfilesScreen}
        options={{
          title: "Purchase",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
      />         
      <Stack.Screen
        name="Dating_to_More"
        component={MoreScreen}
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

export { TalkStackNavigator, MateStackNavigator, PlayStackNavigator, DatingStackNavigator}