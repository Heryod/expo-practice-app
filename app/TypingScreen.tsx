import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import wordsData from "../storage/wordStorage.json";

type Mode = "pl-en" | "en-pl";

type Word = {
  englishWord: string;
  polishWord: string;
};

const words: Word[] = wordsData;

const TranslationScreen = () => {
  const { mode } = useLocalSearchParams<{ mode: Mode }>();
  const [CurrentWord, setCurrentWord] = useState<Word | null>(null);
  const [animatedWord, setAnimatedWord] = useState("");

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  const displayedWord = CurrentWord ? (mode === "pl-en" ? CurrentWord.polishWord : CurrentWord.englishWord) : "";

  useEffect(() => {
    if (!displayedWord) return;

    let iterations = 0;
    const characters = "ABCDEFGHJKLNPQRSTUVXYZabcdefghijklnopqrstuvxyz!#$%^&*()_+~`|}{[]:;?><,./-=";

    const interval = setInterval(() => {
      setAnimatedWord(
        displayedWord
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) {
              return displayedWord[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      iterations += 1 / 2;
      if (iterations >= displayedWord.length) {
        clearInterval(interval);
        setAnimatedWord(displayedWord);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [displayedWord]);

  if (!CurrentWord) return null;

  const correctAnswer = mode === "pl-en" ? CurrentWord.englishWord : CurrentWord.polishWord;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Translate this word</Text>
        <View style={styles.wordContainer}>
          <Text style={[styles.word, { opacity: 0 }]}>{displayedWord}</Text>
          <Text style={[styles.word, styles.animatedWord]}>{animatedWord}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Next" onPress={() => getRandomWord()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0e14",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#1c2638",
    paddingVertical: 17,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#2c3b54",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    width: "100%",
    maxWidth: 400,
    minHeight: 180, // Zapewnia stałą wysokość okna, niezależnie od tego czy tekst ma 1 czy 2 linijki
    alignSelf: "center",
  },
  label: {
    color: "#8b949e",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 16,
    fontWeight: "600",
  },
  wordContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  word: {
    color: "#ffffff",
    fontSize: 39,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  animatedWord: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    marginTop: 16,
  },
});

export default TranslationScreen;
