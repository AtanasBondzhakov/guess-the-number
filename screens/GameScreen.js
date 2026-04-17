import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
                <View>
                    <Text>Higher or lower?</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 32
    }
});