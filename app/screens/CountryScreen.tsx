import React from "react";
import { View } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


import CountryDetails from "../components/CountryDetails";
import Screen from "../components/Screen";
import { Country, CountryScreenProps } from "../types";
import { CountryScreenNavigationProp } from "../navigation/navigation"; 


function CountryScreen({ navigation, route }: CountryScreenProps) {
  const { item: country } = route.params;

  return (
    <Screen>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <CountryDetails country={country} onClose={() => navigation.goBack()} />
      </View>
    </Screen>
  );
}

export default CountryScreen;
