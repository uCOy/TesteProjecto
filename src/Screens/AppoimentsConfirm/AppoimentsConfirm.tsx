import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function AppoimentsConfirm() {

    const navigation = useNavigation();

    const screenHome = () => {
        navigation.navigate("Home")
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        {/* <Image
          style={styles.image}
          source={require("../../assets/imgs/icons/Icon-check-white.png")}
        /> */}
        <Foundation name="checkbox" size={100} color="#805F1D" />
        <Text style={styles.title}>Corte agendado com sucesso!</Text>
        <Text style={styles.text}>
          Verifique suas informações na aba Agendamentos
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={screenHome}>
          <Text style={styles.titleButton}>Voltar para o inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C31",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
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
  containerButton: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerMain: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "85%",
  }
});
