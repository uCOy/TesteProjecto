import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { FontAwesome5 } from '@expo/vector-icons';
  import Button from "../../components/Button/Button";
  import { useNavigation } from "@react-navigation/native";
  
  export default function Register() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/imgs/logo/logotipo-personalizada-barbearia-arte-digital-teso-app.png")}
        />
        <View style={styles.input}>
          <FontAwesome5 name="user-alt" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Digite seu nome"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons name="email" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons name="lock" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Digite sua senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>
          <Button textButton="CADASTRAR"/>
        <View style={styles.alingTitle}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.buttonRegister}>
            <Text style={styles.title}>Já possui conta?</Text>
            <Text style={styles.titleRegister}>Faça seu login</Text>
          </TouchableOpacity>
        </View>
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
    input: {
      width: 300,
      height: 60,
      padding: 18,
      margin: 11,
      borderRadius: 30,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#4D4D4D",
    },
    textInput: {
      flex: 1,
      color: "#fff",
      marginLeft: 15
      // padding: 60,
    },
    title: {
      color: "#fff",
      textAlign: "center",
      padding: 2,
    },
    buttonRegister: {
      flexDirection: "row",
    },
    titleRegister: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      padding: 2,
    },
    alingTitle: {
      flexDirection: "row",
      marginTop: 62,
    },
    image: {
      width: 222,
      height: 222,
      margin: 30,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  