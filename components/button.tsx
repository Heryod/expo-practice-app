import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, label }: { onPress: () => void; label: string }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1c2638",
    paddingVertical: 18,
    paddingHorizontal: 24,
    width: "100%",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2c3b54",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#f8f9fa",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default Button;
