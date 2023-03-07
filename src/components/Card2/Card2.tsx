import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
export interface Barber {
  id: string;
  name: string;
}

export default function Card2({ data }: { data: Barber }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <SimpleLineIcons name="user" size={24} color="#000" />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.service}>Corte Masculino</Text>
        <Text style={styles.value}>R$ 29,90</Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.date}>
          <Text style={styles.buttonText}>25/08/2020</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hour}>
          <Text style={styles.buttonText}>13:00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 365,
    height: 167,
    padding: 10,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7E7E7",
    borderRadius: 20,
    marginRight: 26,
  },
  cardText: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 11,
  },
  service: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 11
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 11
  },
  button: {
    width: 85,
    height: 26,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
  },
  date: {
    width: 121,
    height: 42,
    backgroundColor: "#4D4D4D",
    borderRadius: 10,
    marginTop: 11,
    justifyContent: "center",
  },
  hour: {
    width: 77,
    height: 42,
    backgroundColor: "#4D4D4D",
    borderRadius: 10,
    paddingTop: 8,
    marginTop: 11,
  },

  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 4,
    color: "#fff",
    fontWeight: "bold",
  },
});
