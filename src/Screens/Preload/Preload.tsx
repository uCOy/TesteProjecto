import { Text, View, ActivityIndicator, StyleSheet, Image } from "react-native";
import React from "react";

export default function Preload() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/imgs/logo/logotipo-personalizada-barbearia-arte-digital-teso-app.png")}
      />
      <View>
        <Text style={styles.text}>Aguarde...</Text>
      </View>
      <ActivityIndicator style={styles.loading} size="large" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c31",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 222,
    height: 222,
    margin: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#fff",
    fontSize: 20,
    marginTop: 40
  },
  loading: {
    marginTop: 60,
  },
});
