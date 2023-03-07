import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";

export default function search() {
  const DATA = [
    {
      id: "1",
      name: "Michael Scott",
    },
    {
      id: "2",
      name: "Jim Halpert",
    },
    {
      id: "3",
      name: "Pam Beesly",
    },
    {
      id: "4",
      name: "Pam Beesly",
    },
    {
      id: "5",
      name: "Pam Beesly",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={32} color="white" />
        </TouchableOpacity>
        <View style={styles.input}>
          <TextInput
            placeholder="Onde você está?"
            placeholderTextColor="#fff"
          />
        </View>
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
    backgroundColor: "#282C31",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  header: {
    padding: 32,
    marginTop: 31,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 290,
    height: 52,
    padding: 18,
    marginLeft: 7,
    borderRadius: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4D4D4D",
    flex: 1,
    color: '#FFF',
    fontSize: 16,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
