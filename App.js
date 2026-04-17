import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	}

	return (
		<LinearGradient
			style={styles.rootContainer}
			colors={['#4e0329', '#ddb52f']}
		>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootContainer}
				imageStyle={styles.backgroundImage}
			>
				{userNumber && <GameScreen />}
				{!userNumber && <StartGameScreen onPickNumber={pickedNumberHandler}/>}
			</ImageBackground>
		</LinearGradient>
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
