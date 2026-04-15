import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton.js";

export default function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};