import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { updateStorage } from "../api/fetchWords";
import AlertModal from "../components/AlertModal";
import Button from "../components/button";

export default function Index() {
  const [showAlert, setShowAlert] = useState(false);

  const handlePress = (mode: string) => {
    console.log(`Został naciśnięty przycisk: ${mode}`);
    router.push({
      pathname: "/TypingScreen",
      params: { mode }
    });
  };

  const handaleUpdate = async () => {
    const success = await updateStorage();

    if (success) {
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose learning mode</Text>
        <Text style={styles.subtitle}>Adjust the translation direction to get started</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => handlePress("pl-en")} label="Polish -> English" />
        <Button onPress={() => handlePress("en-pl")} label="English -> Polish" />
        <Button onPress={handaleUpdate} label="Update storage" />

        <AlertModal visible={showAlert} message="Words updated successfully!" onClose={() => setShowAlert(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#0b0e14",
  },
  container: {
    flex: 1,
    backgroundColor: "#0b0e14",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 48,
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    color: "#8b949e",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 16,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
});
