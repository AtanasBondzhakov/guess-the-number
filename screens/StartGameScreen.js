import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton.js";
import Colors from "../constants/colors.js";
import Title from "../components/Title.js";

export default function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'You must choose a number between 1 and 99.',
                [{
                    text: 'Cancel',
                    style: 'destructive',
                    onPress: resetInputHandler
                }]
            )
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootScreen}>
            <Title>Guess my Number</Title>
            <View style={styles.inputContainer}>
                <Text style={styles.instructionText}>Enter a Number</Text>
                <TextInput
                    style={styles.numberInput}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
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
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1
    }
});