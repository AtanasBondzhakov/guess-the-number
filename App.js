import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={['#4e0329', '#ddb52f']}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
  }
});
