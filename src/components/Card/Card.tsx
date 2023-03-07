import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export interface Barber {
  id: string;
  name: string;
}

export default function Card({data}: {data: Barber}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <SimpleLineIcons name="user" size={24} color="#000" />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.text}>{data.name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Barber")} style={styles.button}>
            <Text style={styles.buttonText}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 328,
    // height: 717,
    // paddingTop: 50,
    // justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    marginBottom: 20
  },
  card: {
    backgroundColor: "#1b191b",
    height: 90,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    width: 88,
    height: 88,
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
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 11,
    marginLeft: 30,
  },
  button: {
    marginLeft: 27,
    width: 85,
    height: 26,
    borderWidth: 2,
    marginTop: 16,
    borderStyle: "solid",
    borderColor: "#805F1D",
    borderRadius: 10,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: -6,
    color: "#fff"
  },
});