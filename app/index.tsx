import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Button } from "./components/buttons";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      <View style={styles.resultArea}>
        <Text style={styles.calculationText}>764,90 + 330 =</Text>
        <Text style={styles.resultText}>1.094,90</Text>
      </View>

      <View style={styles.keyboardArea}>

        <View style={styles.row}>
          <Button onPress={() => {}} style={styles.buttonDefault}>
            <Text style={styles.buttonText}>AC</Text>
          </Button>
          <Button onPress={() => {}} style={styles.buttonDefault}>
            <Feather name="delete" size={32} color="#024959" />
          </Button>
          <Button onPress={() => {}} style={styles.buttonDefault}>
            <Text style={styles.buttonText}>%</Text>
          </Button>
          <Button onPress={() => {}} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>÷</Text>
          </Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>7</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>8</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>9</Text></Button>
          <Button onPress={() => {}} style={styles.buttonOperator}><Text style={styles.buttonText}>×</Text></Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>4</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>5</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>6</Text></Button>
          <Button onPress={() => {}} style={styles.buttonOperator}><Text style={styles.buttonText}>−</Text></Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>1</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>2</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>3</Text></Button>
          <Button onPress={() => {}} style={styles.buttonOperator}><Text style={styles.buttonText}>+</Text></Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>±</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>0</Text></Button>
          <Button onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>,</Text></Button>
          <Button onPress={() => {}} style={styles.buttonEqual}><Text style={styles.buttonEqualColor}>=</Text></Button>
        </View>

      </View>

    </SafeAreaView>
  );
}