import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from './constants/colors.js';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	}

	return (
		<SafeAreaProvider>
			<LinearGradient
				style={styles.rootContainer}
				colors={[Colors.primary700, Colors.accent500]}
			>
				<ImageBackground
					source={require('./assets/images/background.png')}
					resizeMode='cover'
					style={styles.rootContainer}
					imageStyle={styles.backgroundImage}
				>
					{userNumber && <GameScreen />}
					{!userNumber && <StartGameScreen onPickNumber={pickedNumberHandler} />}
				</ImageBackground>
			</LinearGradient>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1
	},
	backgroundImage: {
		opacity: 0.15
	}
});
