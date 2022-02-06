import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <BottomTabNavigator />
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
