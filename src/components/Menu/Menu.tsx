import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.touchableOpacity}>
        <Text style={styles.icon}>
          <AntDesign name="home" size={32} color="#b18a3b" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("attendance")} style={styles.touchableOpacity}>
        <Text style={styles.icon}>
          <AntDesign name="form" size={32} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Appoiments")} style={styles.calendar}>
        <Text style={styles.iconArea}>
          <AntDesign style={styles.calendar} name="calendar" size={32} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("favorites")} style={styles.touchableOpacity}>
        <Text style={styles.icon}>
          <AntDesign name="hearto" size={32} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.touchableOpacity}>
        <Text style={styles.icon}>
          <AntDesign name="user" size={32} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    width: "100%",
    height: 56,
    backgroundColor: "#4D4D4D",
    flexDirection: "row",
    paddingHorizontal: 26,
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    marginLeft: 20
  },
  calendar: {
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: '#fff',
    width: 56,
    height: 56,
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderRadius: 50,
    // marginTop: -60,
    // zIndex: 9999, 

  },
  iconArea: {
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: '#fff',
  }
});
