import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import GuideOpen from "../../components/Guide Open/GuideOpen";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

  const data = {
    id: "1",
    name: "Barbeiro 1",
  };

export default function Barber2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Appoiments")}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <GuideOpen data={data}/>
      </View>
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
    padding: 26,
    marginTop: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
});
