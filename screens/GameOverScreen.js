import { Image, StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ roundsNumbers, userNumber, onNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 420) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };

    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.infoText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumbers} </Text>
                    rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
            </View>
            <View>
                <PrimaryButton onPress={onNewGame}>Start new game</PrimaryButton>
            </View>
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        overflow: 'hidden',
        color: Colors.primary700,
        margin: 24
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});