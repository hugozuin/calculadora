import { TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface NumberProps {
  children: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
}

export function Button({ children, onPress, style }: NumberProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
