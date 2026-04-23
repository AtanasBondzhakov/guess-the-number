import { useEffect, useState } from "react";
import { Alert, StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card.js";
import InstructionText from "../components/ui/InstructionText.js";
import GuessLogItem from "../components/game/GuessLogItem.js";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }

    return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [roundGuess, setRoundGuess] = useState([initialGuess]);

    useEffect(() => {
        if (userNumber === currentGuess) {
            onGameOver();
        }
    }, [userNumber, currentGuess]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", "You know it's wrong", [
                { text: 'Try again', style: "cancel" }
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess;
        }

        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
        setRoundGuess(prevRoundGuess => [newRndNum, ...prevRoundGuess]);
    }

    const guessRoundListLength = roundGuess.length;

    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText>Greater or lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="remove" size={24} color="#fff" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="add" size={24} color="#fff" />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
                <View>
                    <FlatList
                        data={roundGuess}
                        renderItem={({ item, index }) => <GuessLogItem roundNumber={guessRoundListLength - index} guess={item} />}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 32
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16
    },
    buttonContainer: {
        flex: 1
    }
});