import { getDatabaseLink } from "@/private/api_data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchWords = async () => {
  try {
    const response = await fetch(getDatabaseLink());
    const data = await response.json();

    return data.documents.map((doc: any) => ({
      englishWord: doc.englishWord,
      polishWord: doc.polishWord,
    }));
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const updateStorage = async () => {
  try {
    const newWords = await fetchWords();
    await AsyncStorage.setItem("WORDS_DATA", JSON.stringify(newWords));

    return true;
  } catch (error) {
    console.error("Error updating storage:", error);

    return false;
  }
};
