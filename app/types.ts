import { NavigationProp } from "@react-navigation/native";

export interface Country {
  emoji: string;
  name: string;
  native: string;
  capital: string;
  currency: string;
  languages: Language[];
}

export interface Language {
  code: string;
  name: string;
}

export interface IconProps {
  iconName: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

export interface SearchBoxProps {
  searchPhrase: string;
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
}

export interface ScreenProps {
  children: React.ReactNode;
  style?: import("react-native").ViewStyle;
}

export interface CountriesScreenProps {
  navigation: NavigationProp<any, any>;
}

export interface CountryScreenProps {
  route: {
    params: {
      item: Country;
    }
  }
  navigation: NavigationProp<any, any>;
}



// import { ReactNode } from "react";
// import { ViewStyle } from "react-native";

// export interface Language {
//   code: string;
//   name: string;
// }

// export interface Country {
//   emoji: string;
//   name: string;
//   native: string;
//   capital: string;
//   currency: string;
//   languages: Language[];
// }

// export interface IconProps {
//   iconName: string;
//   size?: number;
//   backgroundColor?: string;
//   iconColor?: string;
// }

// export interface SearchBoxProps {
//   searchPhrase: string;
//   setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
// }

// export interface ScreenProps {
//   children: ReactNode;
//   style?: ViewStyle;
// }

// export interface CountriesScreenProps {
//   navigation: import("@react-navigation/native").NavigationProp<any, any>;
// }

