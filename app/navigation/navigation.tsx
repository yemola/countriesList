import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Country } from "../types"; // Make sure to import the correct type

export type RootStackParamList = {
  Home: undefined;
  Country: { item: Country };
  // ... other screens
};

export type CountryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Country'>;
