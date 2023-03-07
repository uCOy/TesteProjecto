import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";

export const DATA = [
  {
    id: "1",
    name: "Gabriel Cardoso",
  },
  {
    id: "2",
    name: "Theo Castro",
  },
  {
    id: "3",
    name: "Fernando Silva",
  },
  {
    id: "4",
    name: "Red Beiramar",
  },
  {
    id: "5",
    name: "Barbeirinho",
  },
];

export default function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Encontre seu{"\n"}barbeiro favorito</Text>
        <MaterialIcons name="search" size={26} color="#fff" />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Onde você está?"
          placeholderTextColor="#fff"
        />
        <MaterialIcons name="my-location" size={24} color="#fff" />
      </View>
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
        <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c31",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  header: {
    padding: 30,
    marginTop: 31,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 60,
    padding: 18,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4D4D4D",
  },
  textInput: {
    flex: 1,
    color: "#fff",
    padding: 21,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
