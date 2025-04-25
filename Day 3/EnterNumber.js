import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';

export default function EnterNumber({ onStartGame }) {
    const [enteredText, setEnteredText] = useState('');
    function onChangeText(newEneteredText){
        setEnteredText(newEneteredText);
    }
    function resetEnteredText(){
      setEnteredText('');
    }
    function startGameHandler() {
      const num = parseInt(enteredText);
      if (isNaN(num) || num < 0 || num > 100) {
        Alert.alert('Please enter a valid number between 0 and 100.');
        return;
      }
      onStartGame(num);
    }
    const instructions = "1. Don't fill negative number\n2. Fill a number between 0 to 100 inclusive of these 2 numbers\n3. Don't add decimal numbers, try to avoid them";
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Enter a number to start game</Text>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={enteredText}
          keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
        <View style={{flex: 1, marginHorizontal: 5}}>
        <Button
            onPress={resetEnteredText}
            title="Reset"
            color="#841584"/>
            </View>
            <View style={{flex: 1, marginHorizontal: 5}}>
            <Button
            onPress={startGameHandler}
             title="Start"
            color="#841584"/></View>
        </View>
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 50, padding: 20, borderRadius: 10}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Instructions: </Text>
            <Text style={styles.instructions}>
            {instructions}
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heading: {
      color: 'white',
      fontSize: 18,
      marginBottom: 10
    },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 10
  },
  instructions: {
    color: 'white',
    lineHeight: 25
  }
});
