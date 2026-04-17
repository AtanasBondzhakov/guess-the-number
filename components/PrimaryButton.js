import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => (
                    pressed ?
                        [styles.buttonInnerContainer, styles.pressed] :
                        styles.buttonInnerContainer
                )}
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonInnerContainer: {
        borderRadius: 28,
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        overflow: 'hidden'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});