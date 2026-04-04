import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AlertModal = ({ visible, message, onClose }: { visible: boolean; message: string; onClose: () => void }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.message}>{message}</Text>

        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  modal: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 14,
    width: "80%",
    alignItems: "center",
  },

  message: {
    color: "#fff",
    marginBottom: 16,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#1c2638",
    borderWidth: 0.7,
    borderColor: "#2c3b54",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default AlertModal;
