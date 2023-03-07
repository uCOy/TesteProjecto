import {
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React, { Component } from "react";
  
  type Props = {
    textButton: string;
  };
  
  export default function Button2({ textButton }: Props) {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.titleButton}>{textButton}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      width: 91,
      padding: 12,
      marginRight: 20,
      borderRadius: 10,
      backgroundColor: "#2D2D2D",
      justifyContent: "center",
    },
    titleButton: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
    },
  });
  