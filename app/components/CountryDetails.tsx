import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Country, Language } from "../types";

interface Props {
  country: Country;
  onClose: () => void;
}

const CountryDetails: React.FC<Props> = ({ country, onClose }) => {
  return (
    <Pressable
      onPress={onClose}
      style={{
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.emoji}>{country.emoji}</Text>
          <Text style={styles.name}>{country.name}</Text>
        </View>

        <Text style={styles.native}>Native: {country.native}</Text>
        <Text style={styles.capital}>Capital: {country.capital}</Text>

        <Text style={styles.currency}>Currency: {country.currency}</Text>
        <Text style={styles.languages}>Languages:</Text>
        <View style={styles.languageList}>
          {country.languages.map((language: Language) => (
            <Text key={language.code} style={styles.language}>
              {language.name} ({language.code})
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    height: "auto",
    padding: 16,
    borderRadius: 8,
    margin: 6,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
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

export default CountryDetails;


// import React from "react";
// import { Pressable, StyleSheet, Text, View } from "react-native";

// import { Country } from "../types";

// // type CountryDetailsProps = {
// //     country: Country;
// //     onClose: () => void;
// // }

// const CountryDetails = ({ country, onClose }) => {
//   return (
//     // <Pressable onPress={onClose} style={StyleSheet.absoluteFill} >
//     <View
//       style={{
//         justifyContent: "center",
//         flex: 1,
//       }}
//     >
//       <View style={styles.container}>
//         <View style={{ flexDirection: "row" }}>
//           <Text style={styles.emoji}>{country.emoji}</Text>
//           <Text style={styles.name}>{country.name}</Text>
//         </View>

//         <Text style={styles.native}>Native: {country.native}</Text>
//         <Text style={styles.capital}>Capital: {country.capital}</Text>

//         <Text style={styles.currency}>Currency: {country.currency}</Text>
//         <Text style={styles.languages}>Languages:</Text>
//         <View style={styles.languageList}>
//           {country.languages.map((language) => (
//             <Text key={language.code} style={styles.language}>
//               {language.name} ({language.code})
//             </Text>
//           ))}
//         </View>
//       </View>
//     </View>
//     // </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "gold",
//     padding: 16,
//     borderRadius: 8,
//     margin: 6,
//     shadowColor: "grey",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 10,
//     width: "96%",
//   },
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

// export default CountryDetails;
