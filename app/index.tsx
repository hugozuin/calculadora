import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../src/components/buttons";
import { styles } from "../src/styles";

import { useCalculator } from "../src/hooks/useCalculator";

export default function Index() {

  const {
    displayValue,
    firstValue,
    operator,
    handleNumber,
    handleOperator,
    handleEquals,
    handleDelete,
    handleToggleSign,
    handlePercent,
    handleClear
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      <View style={styles.resultArea}>
        <Text style={styles.calculationText}>
          {firstValue && operator ? `${firstValue} ${operator}` : ''}
        </Text>

        <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>{displayValue}</Text>
      </View>

      <View style={styles.keyboardArea}>

        <View style={styles.row}>
          <Button onPress={handleClear} style={styles.buttonDefault}>
            <Text style={styles.buttonText}>AC</Text>
          </Button>
          <Button onPress={handleDelete} style={styles.buttonDefault}>
            <Feather name="delete" size={32} color="#024959" />
          </Button>
          <Button onPress={handlePercent} style={styles.buttonDefault}>
            <Text style={styles.buttonText}>%</Text>
          </Button>
          <Button onPress={() => { handleOperator('÷') }} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>÷</Text>
          </Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => { handleNumber('7') }} style={styles.buttonDefault}><Text style={styles.buttonText}>7</Text></Button>
          <Button onPress={() => { handleNumber('8') }} style={styles.buttonDefault}><Text style={styles.buttonText}>8</Text></Button>
          <Button onPress={() => { handleNumber('9') }} style={styles.buttonDefault}><Text style={styles.buttonText}>9</Text></Button>
          <Button onPress={() => { handleOperator('x') }} style={styles.buttonOperator}><Text style={styles.buttonText}>×</Text></Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => { handleNumber('4') }} style={styles.buttonDefault}><Text style={styles.buttonText}>4</Text></Button>
          <Button onPress={() => { handleNumber('5') }} style={styles.buttonDefault}><Text style={styles.buttonText}>5</Text></Button>
          <Button onPress={() => { handleNumber('6') }} style={styles.buttonDefault}><Text style={styles.buttonText}>6</Text></Button>
          <Button onPress={() => { handleOperator('-') }} style={styles.buttonOperator}><Text style={styles.buttonText}>−</Text></Button>
        </View>

        <View style={styles.row}>
          <Button onPress={() => { handleNumber('1') }} style={styles.buttonDefault}><Text style={styles.buttonText}>1</Text></Button>
          <Button onPress={() => { handleNumber('2') }} style={styles.buttonDefault}><Text style={styles.buttonText}>2</Text></Button>
          <Button onPress={() => { handleNumber('3') }} style={styles.buttonDefault}><Text style={styles.buttonText}>3</Text></Button>
          <Button onPress={() => { handleOperator('+') }} style={styles.buttonOperator}><Text style={styles.buttonText}>+</Text></Button>
        </View>

        <View style={styles.row}>
          <Button onPress={handleToggleSign} style={styles.buttonDefault}><Text style={styles.buttonText}>±</Text></Button>
          <Button onPress={() => { handleNumber('0') }} style={styles.buttonDefault}><Text style={styles.buttonText}>0</Text></Button>
          <Button onPress={() => { handleNumber(',') }} style={styles.buttonDefault}><Text style={styles.buttonText}>,</Text></Button>
          <Button onPress={() => { handleEquals() }} style={styles.buttonEqual}><Text style={styles.buttonEqualColor}>=</Text></Button>
        </View>
        
      </View>

    </SafeAreaView>
  );
}