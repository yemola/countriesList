import { request, gql } from "graphql-request";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Make sure to install this package
import { Country } from "../types";

const endpoint = "https://countries.trevorblades.com/graphql";

interface GraphQLResponse {
  countries: Country[];
}

const query = gql`
  {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const fetchCountries = async (forceFetch = false): Promise<Country[]> => {
  try {
    if (!forceFetch) {
      // Check if the data is already cached
      const cachedData = await AsyncStorage.getItem("cachedCountries");
      if (cachedData) {
        return JSON.parse(cachedData);
      }
    }

    const response = await request<GraphQLResponse>(endpoint, query);
    const countries = response.countries;

    // Cache the response
    await AsyncStorage.setItem("cachedCountries", JSON.stringify(countries));

    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export default fetchCountries;





// import { request, gql } from "graphql-request";

// const endpoint = "https://countries.trevorblades.com/graphql";

// const query = gql`
//   {
//     countries {
//       code
//       name
//       native
//       capital
//       emoji
//       currency
//       languages {
//         code
//         name
//       }
//     }
//   }
// `;

// const fetchCountries = async () => {
//   try {
//     const response = await request(endpoint, query);
//     const countries = response.countries;
//     return countries;
//   } catch (error) {
//     console.error("Error fetching countries:", error);
//     return [];
//   }
// };

// export default fetchCountries;
