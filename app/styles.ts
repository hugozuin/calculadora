import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#026773",
    },
    resultArea: {
        backgroundColor: "#026773",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 120,
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    calculationText: {
        color: "rgba(168, 248, 248, 0.80)",
        textAlign: "right",
        fontFamily: "Anek Devanagari",
        fontSize: 30,
        fontWeight: "400",
        marginBottom: 12,
    },
    resultText: {
        color: "#FFFFFF",
        textAlign: "right",
        fontFamily: "Anek Devanagari",
        fontSize: 80,
        fontWeight: "600",
    },
    keyboardArea: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        paddingTop: 28,
        paddingHorizontal: 22,
        paddingBottom: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    buttonDefault: {
        backgroundColor: "rgba(255, 255, 255, 0.01)",
    },
    buttonOperator: {
        backgroundColor: "rgba(229, 229, 229, 0.5)",
    },
    buttonEqual: {
        backgroundColor: "#024959",
    },
    buttonEqualColor:{
        color: "#FFFFFF",
        fontFamily: "Anek Devanagari",
        fontSize: 40,
        fontWeight: "400",
    },
    buttonText: {
        color: "#024959",
        fontFamily: "Anek Devanagari",
        fontSize: 40,
        fontWeight: "400",
    },
    buttonTextEqual: {
        color: "#FFFFFF",
        fontFamily: "Anek Devanagari",
        fontSize: 40,
        fontWeight: "400",
    },
});