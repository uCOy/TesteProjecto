import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import Haircuts from "../../components/Haircuts/Haircuts";
import Coments from "../../components/Coments/Coments";
import { Feather } from "@expo/vector-icons";
import { horario } from "../Hours/Hours";
import Barber2 from "../../Screens/Barbeiro.v2/BarberV2";

export interface Barber {
  id: string;
  name: string;
}

export default function GuideOpen({ data }: { data: Barber }) {
  const DATA = [
    {
      id: "1",
      price: "25,00",
      nameHairCut: "Corte Masculino",
    },
    {
      id: "2",
      price: "30,00",
      nameHairCut: "Alisamento",
    },
    {
      id: "3",
      price: "40,00",
      nameHairCut: "Barba",
    },
    {
      id: "4",
      price: "10,00",
      nameHairCut: "Sobrancelha",
    },
    {
      id: "5",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
    {
      id: "6",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
    {
      id: "7",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
    {
      id: "8",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}></View>
        <Text style={styles.barberName}>{data.name}</Text>
        <View style={styles.circleHeart}>
          <Feather style={styles.heart} name="heart" size={24} color="black" />
        </View>
      </View>
      <View>
        <Text style={styles.servicesTitle}>Lista de Serviços</Text>
      </View>
      <View>
        <ScrollView
          style={styles.servicesScroll}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Haircuts data={item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
        <Coments />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 70,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
  },
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  barberName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 23,
  },
  icon: {
    width: 110,
    height: 110,
    backgroundColor: "#E7E7E7",
    marginLeft: 27,
    borderRadius: 20,
    marginTop: -30,
    index: 1,
  },
  circleHeart: {
    width: 40,
    marginTop: -18,
    height: 40,
    marginRight: 20,
    borderRadius: 180,
    backgroundColor: "#E7E7E7",
    boxShadow: "3",
    boxShadowColor: "#E7E7E7",
  },
  heart: {
    marginLeft: 8,
    marginTop: 8,
  },
  servicesTitle: {
    marginTop: 30,
    fontSize: 18,
    marginLeft: 29,
    fontWeight: "bold",
  },
  haircutsName: {
    fontSize: 16,
    marginLeft: 29,
    marginTop: 30,
    fontWeight: "bold",
  },
  Haircuts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  servicesScroll: {
    maxHeight: 350,
  },
});
