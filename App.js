import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';
import GameOverScreen from './screens/GameOverScreen.js';
import Colors from './constants/colors.js';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundsGuess, setRoundsGuess] = useState(0);

  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }

  const gameOverHandler = (totalRounds) => {
    setGameIsOver(true);
    setRoundsGuess(totalRounds);
  }

  const newGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
    setRoundsGuess(0);
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
          {(userNumber && !gameIsOver) &&
            <GameScreen
              userNumber={userNumber}
              onGameOver={gameOverHandler}
            />
          }
          {!userNumber && <StartGameScreen onPickNumber={pickedNumberHandler} />}
          {(userNumber && gameIsOver) && (
            <GameOverScreen
              roundsNumbers={roundsGuess}
              userNumber={userNumber}
              onNewGame={newGameHandler}
            />
          )}
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
