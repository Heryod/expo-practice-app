import { StyleSheet, Text, View } from "react-native";

const CurrentWordComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>Current Word</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c2638",
    paddingVertical: 18,
    paddingHorizontal: 24,
    width: "100%",
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: "#2c3b54",
  },
  word: {
    color: "#f8f9fa",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default CurrentWordComponent;
