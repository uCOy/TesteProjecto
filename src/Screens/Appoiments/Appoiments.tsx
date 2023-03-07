import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { horario } from "../../components/Hours/Hours";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import Menu from "../../components/Menu/Menu";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 50;

export default function Appoiments() {
  const data = {
    id: "1",
    name: "Barbeiro 1",
  };

  const navigation = useNavigation();

  const [isSelected, setSelected] = useState();
  const [inicio, setInicio] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const slide = () => {
    Animated.timing(position, {
      toValue: { x: 0, y: -80 },
      delay: 200,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isSelected && date) {
      fadeIn(), slide();
    }
  });

  const addTime = (value, inicio) => {
    setSelected(value);
    setInicio(inicio);
  };

  return (
    <View style={styles.container}>
      <Card data={data} />
      <View style={styles.card}>
        <Text style={styles.text}>Corte Masculino</Text>
        <Text style={styles.text}>R$ 29,90</Text>
      </View>
      <Text style={styles.title}>Selecione uma data</Text>
      <View style={styles.cardCalender}>
        <TouchableOpacity
          style={styles.buttonCalender}
          onPress={showDatePicker}
        >
          {/* <Text style={styles.textDate}>
            {date === ""
              ? "Escolha uma data"
              : date.toString().substring(4, 15)}
          </Text> */}
          <Text style={styles.textDate}>{inicio}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="pt-BR"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date(2022, 0, 1)}
        />
      </View>
      <Text style={styles.title}>Escolha um horário</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
        data={horario}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.timeContainer}
            onPress={() => addTime(item.id, item.inicio)}
          >
            <Text
              style={item.id === isSelected ? styles.selected : styles.textTime}
            >
              {item.inicio}-{item.final}
            </Text>
            <View>
              <Text style={styles.textTime}>Disponível</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Animated.View
        style={{
          height: 80,
          width: "100%",
          justifyContent: "flex-start",
          position: "absolute",
          bottom: -80,
          alignItems: "center",
          alignSelf: "center",
          opacity: fadeAnim,
          transform: [{ translateX: position.x }, { translateY: position.y }],
        }}
      >
      </Animated.View>
      <Button onPress={() => navigation.navigate("AppoimentsConfirm")} textButton="Confirmar" />
      <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C31",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: statusBarHeight,
  },
  card: {
    width: 328,
    height: 57,
    padding: 11,
    marginTop: 100,
    marginLeft: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  buttonCalender: {
    height: 55,
    borderBottomWidth: 3,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f0f6fd",
  },
  cardCalender: {
    width: "100%",
    paddingHorizontal: 40,
  },
  flatList: {
    width: "100%",
    paddingHorizontal: 40,
  },
  textDate: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 130 
    
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  textTime: {
    color: "#000",
  },
  selected: {
    color: "blue",
  },
});
