import React, { useEffect, useState, useMemo } from "react";
import { StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { RootStackParamList } from "../navigation/navigation";

import CountryListItem from "../components/CountryListItem";
import fetchCountries from "../api/graphql";
import Screen from "../components/Screen";
import SearchBox from "../components/SearchBox";
import colors from "../config/colors";
import { Country, CountriesScreenProps } from "../types";

function CountriesScreen({ navigation }: CountriesScreenProps) {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  const filteredCountries = useMemo(() => {
    if (searchPhrase === "") {
      return countries;
    }
    const lowerCaseSearchPhrase = searchPhrase
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    return countries?.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchPhrase)
    );
  }, [searchPhrase, countries]);

  const renderCountries = ({ item }: { item: Country }) => {
    return (
      <CountryListItem
        country={item}
        onPress={() => navigation.navigate("Country", { item })}
      />
    );
  };

  return (
    <Screen style={styles.screen}>
      <SearchBox
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <FlashList
        data={filteredCountries}
        keyExtractor={(country) => country.emoji}
        renderItem={renderCountries}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        estimatedItemSize={150}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingTop: 2,
    backgroundColor: colors.gold,
  },
});

export default CountriesScreen;
