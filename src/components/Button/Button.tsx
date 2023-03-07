import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

type Props = {
  textButton: string;
  onPress: () => void;
};

export default function Button({ textButton, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.titleButton}>{textButton}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 60,
    margin: 17,
    borderRadius: 30,
    backgroundColor: "#2D2D2D",
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#805F1D",
  },
  titleButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
