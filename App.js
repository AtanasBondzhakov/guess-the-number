import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});
