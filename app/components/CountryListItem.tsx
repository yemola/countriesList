import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Country } from "../types";

interface Props {
  country: Country;
  onPress: () => void;
}

const CountryListItem: React.FC<Props> = ({ country, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.emoji}>{country.emoji}</Text>
          <Text style={styles.name}>{country.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    flex: 1,
    margin: 6,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    width: "96%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    paddingLeft: 7,
  },
  native: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  capital: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  currency: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  languages: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  languageList: {
    marginLeft: 16,
  },
  language: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
  },
});

export default CountryListItem;

// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
// import { Link } from "expo-router";

// import { Country } from "../types";

// // interface CountryListItemProps {
// //   country: Country;
// //   onPress: () => void;
// // }

// const CountryListItem = ({ country, onPress }) => {
//   // const [moreBtnClicked, setMoreBtnClicked] = useState(false);

//   // const showMore = () => {
//   //   setMoreBtnClicked(!moreBtnClicked);
//   // }

//   return (
//     <TouchableWithoutFeedback onPress={onPress}>
//       <View style={styles.container}>
//         <View style={{ flexDirection: "row" }}>
//           <Text style={styles.emoji}>{country.emoji}</Text>
//           <Text style={styles.name}>{country.name}</Text>
//         </View>

//         {/* <View style={{ display: moreBtnClicked ? "flex" : "none"}}>
//       <Text style={styles.native}>Native: {country.native}</Text>
//       <Text style={styles.capital}>Capital: {country.capital}</Text>

//       <Text style={styles.currency}>Currency: {country.currency}</Text>
//       <Text style={styles.languages}>Languages:</Text>
//       <View style={styles.languageList}>
//         {country.languages.map((language) => (
//           <Text key={language.code} style={styles.language}>
//             {language.name} ({language.code})
//           </Text>
//         ))}
//       </View>
//       </View> */}
//         {/* <TouchableWithoutFeedback onPress={showMore}>
//         <Text style={[styles.more, {marginTop: moreBtnClicked ? 10 : 4}]}>{moreBtnClicked ? "less..." : "more..."}</Text>
//       </TouchableWithoutFeedback> */}
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     flex: 1,
//     margin: 6,
//     shadowColor: "grey",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 10,
//     width: "96%",
//   },
//   // more: {
//   //   alignSelf: "flex-end",
//   //   color: "blue",
//   //   padding: 6
//   // },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 8,
//     paddingLeft: 7,
//   },
//   native: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 4,
//   },
//   capital: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 4,
//   },
//   emoji: {
//     fontSize: 24,
//     marginBottom: 8,
//   },
//   currency: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 8,
//   },
//   languages: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   languageList: {
//     marginLeft: 16,
//   },
//   language: {
//     fontSize: 14,
//     color: "#444",
//     marginBottom: 2,
//   },
// });

// export default CountryListItem;
