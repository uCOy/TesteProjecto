import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";

export default function Coments() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View>
          <Text style={styles.title}>Bonieky Lacerda</Text>
          <Text style={styles.description}>
            Muito bom este cortador, muito educado e atencioso. Recomendo
            demais!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  containerCard: {
    width: 274,
    height: 80,
    backgroundColor: "#0E1010",
    borderRadius: 10,
  },
  title: {
    paddingLeft: 12,
    paddingTop: 15,
    color: "#fff",
  },
  description: {
    color: "#fff",
    paddingLeft: 12,
    paddingTop: 7,
  },
});
