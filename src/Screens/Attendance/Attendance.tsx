import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import { Feather } from "@expo/vector-icons";
  import Card from "../../components/Card/Card";
  import Card2 from "../../components/Card2/Card2";
  import Menu from "../../components/Menu/Menu";
  
  export default function attendance() {
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
        {/* <TouchableOpacity>
          <Feather style={styles.arrow} name="arrow-left" size={43} color="white" />
        </TouchableOpacity>
          <Text style={styles.title}>Favoritos</Text> */}
        </View>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Card2 data={item} />}
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
      marginLeft: 9.6,
      marginRight: 238
    },
    header: {
      padding: 26,
      marginTop: 31,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    arrow: {
        marginLeft: 7
    },
    card: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  