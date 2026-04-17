import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 24,
        padding: 24,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: Colors.accent500,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})