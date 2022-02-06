import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TalkStackNavigator, MateStackNavigator, PlayStackNavigator, DatingStackNavigator} from "./StackNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
          <BottomTab.Screen
            name ="Talk"
            component={TalkStackNavigator}
            options={{
              tabBarLabel: 'Talk',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name = "account-voice" color = {color} size = {size} />
              ),
            }}    
          />
          <BottomTab.Screen
            name="Playground"
            component={PlayStackNavigator}
            options={{
              tabBarLabel: 'Playground',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name= "ticket" color = {color} size = {size} /> 
              ),
            }}    
          />
          <BottomTab.Screen
            name="Mates"
            component={MateStackNavigator}
            options={{
              tabBarLabel: 'Mates',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="handball" color = {color} size = {size} /> 
              ),
            }}    
          />
          <BottomTab.Screen
            name = "Dating" 
            component={DatingStackNavigator}
            options={{
              tabBarLabel: 'Dating',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="human-male-female" color = {color} size = {size} /> 
              ),
            }}    
          />    
        </BottomTab.Navigator>
        );
};

export default BottomTabNavigator;