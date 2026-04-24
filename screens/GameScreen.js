import { useEffect, useState } from "react";
import { Alert, StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card.js";
import InstructionText from "../components/ui/InstructionText.js";
import GuessLogItem from "../components/game/GuessLogItem.js";

const generateRandomBetween = (min, max, exclude) => {
    if (min === max) {
        return min;
    }
    const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;

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
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (userNumber === currentGuess) {
            onGameOver(roundGuess.length);
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
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
        setRoundGuess(prevRoundGuess => [newRndNum, ...prevRoundGuess]);
    }

    const guessRoundListLength = roundGuess.length;

    let content = <>
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
        <View style={styles.listContainer}>
            <FlatList
                data={roundGuess}
                renderItem={({ item, index }) => <GuessLogItem roundNumber={guessRoundListLength - index} guess={item} />}
                keyExtractor={item => item}
            />
        </View>
    </>

    if (width > 500) {
        content = (
            <View style={styles.containerWide}>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainerWide}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="#fff" />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainerWide}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="#fff" />
                        </PrimaryButton>
                    </View>
                </View>
                <View style={styles.listContainerWide}>
                    <FlatList
                        data={roundGuess}
                        renderItem={({ item, index }) => <GuessLogItem roundNumber={guessRoundListLength - index} guess={item} />}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    containerWide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 36
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16
    },
    buttonContainer: {
        flex: 1,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    listContainerWide: {
        flex: 1,
    },
    buttonContainerWide: {
        flex: 1
    }
});