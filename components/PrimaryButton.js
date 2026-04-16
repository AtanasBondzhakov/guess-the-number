import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children }) {
    const pressHandler = () => {
        console.log('Pressed');
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={pressHandler}
                style={({ pressed }) => (
                    pressed ?
                        [styles.buttonInnerContainer, styles.pressed] :
                        styles.buttonInnerContainer
                )}
                android_ripple={{color: '#640233'}}
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
        backgroundColor: '#92074d',
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