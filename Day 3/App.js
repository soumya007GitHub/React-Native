import { useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EnterNumber from './screens/EnterNumber';
import GuessNumber from './screens/GuessNumber';
import Success from './screens/Success';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [ isSuccess, setIsSuccess ]= useState(false);
  function startGame(number) {
    setSelectedNumber(number);
    setIsSuccess(false);
  }
  function goBack() {
    setSelectedNumber(null);
    setIsSuccess(false);
  }
  function goToSuccess() {
    setIsSuccess(true);
  }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'rgba(600, 600, 600, 0.5)'} statusBarStyle={'light-content'}/>
    <ImageBackground style={styles.imageBackground} source={require('./assets/images/dices.jpg')} resizeMode="cover">
    {!selectedNumber ? (
          <EnterNumber onStartGame={startGame} />
        ) : isSuccess ? (
          <Success onGoBack={goBack}/>
        ) : (
          <GuessNumber selectedNumber={selectedNumber} onGoBack={goBack} onSuccess={goToSuccess} />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
  }
});
