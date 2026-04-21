import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors.js";

export default function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});