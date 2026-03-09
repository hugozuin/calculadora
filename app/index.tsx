import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Number } from "./components/numbers";
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
          <Number onPress={() => {}} style={styles.buttonDefault}>
            <Text style={styles.buttonText}>AC</Text>
          </Number>
          <Number onPress={() => {}} style={styles.buttonDefault}>
            <Feather name="delete" size={32} color="#024959" />
          </Number>
          <Number onPress={() => {}} style={styles.buttonDefault}>
            <Text style={styles.buttonText}>%</Text>
          </Number>
          <Number onPress={() => {}} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>÷</Text>
          </Number>
        </View>

        <View style={styles.row}>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>7</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>8</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>9</Text></Number>
          <Number onPress={() => {}} style={styles.buttonOperator}><Text style={styles.buttonText}>×</Text></Number>
        </View>

        <View style={styles.row}>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>4</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>5</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>6</Text></Number>
          <Number onPress={() => {}} style={styles.buttonOperator}><Text style={styles.buttonText}>−</Text></Number>
        </View>

        <View style={styles.row}>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>1</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>2</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>3</Text></Number>
          <Number onPress={() => {}} style={styles.buttonOperator}><Text style={styles.buttonText}>+</Text></Number>
        </View>

        <View style={styles.row}>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>±</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>0</Text></Number>
          <Number onPress={() => {}} style={styles.buttonDefault}><Text style={styles.buttonText}>,</Text></Number>
          <Number onPress={() => {}} style={styles.buttonEqual}><Text style={styles.buttonEqualColor}>=</Text></Number>
        </View>

      </View>

    </SafeAreaView>
  );
}