import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Button2 from "../../components/Button2/Button2";
import { SimpleLineIcons } from "@expo/vector-icons";

export interface Barber {
  id: string;
  nameHairCut: string;
  price: string;
}

export default function Haircuts({data}: {data: Barber}) {
  return (
    <View style={styles.container}>
      <View style={styles.Haircuts}>
        <Text style={styles.haircutsName}>
          {data.nameHairCut}{"\n"}
          R$ {data.price}
        </Text>
        <Button2 textButton="Agendar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10
  },
  haircutsName: {
    fontSize: 16,
    marginLeft: 29,
    fontWeight: "bold",
  },
  Haircuts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
