import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CountriesScreen from "./app/screens/CountriesScreen";
import CountryScreen from "./app/screens/CountryScreen";

const Stack = createNativeStackNavigator();

const CountryNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="All Countries" component={CountriesScreen} />
    <Stack.Screen name="Country" component={CountryScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <CountryNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
