import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function GuessNumber({ selectedNumber, onGoBack, onSuccess }) {
    const [ guessedNumber, setGuessedNumber ] = useState(null);
    const [ array, setArray ] = useState([]);
    useEffect(() => {
        const number = getRandomIntInclusive(0, 100);
        setGuessedNumber(number);
        setArray([{ guess: number, id: Math.random().toString() }]);
      }, []);
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const handleMinus = () => {
        const newGuess = getRandomIntInclusive(0, guessedNumber);
                
      if(newGuess == selectedNumber){
        onSuccess();
      }
        setGuessedNumber(newGuess);
        setArray((array)=>[...array, {guess: newGuess, id: Math.random().toString()}]);
      };
    
      const handlePlus = () => {
        const newGuess = getRandomIntInclusive(guessedNumber, selectedNumber);
                
      if(newGuess == selectedNumber){
        onSuccess();
      }
        setGuessedNumber(newGuess);
        setArray((array)=>[...array, {guess: newGuess, id: Math.random().toString()}]);
      };
      return (
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Text style={styles.text}>Guessed Number: {guessedNumber}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button onPress={handleMinus} title="-" color="#841584" />
              </View>
              <View style={styles.buttonWrapper}>
                <Button onPress={handlePlus} title="+" color="#841584" />
              </View>
            </View>
            <Text style={styles.back} onPress={onGoBack}>
              🔙 Go Back
            </Text>
          </View>
    
          <View style={styles.bottomSection}>
            <Text style={styles.text}>Guesses:</Text>
            <FlatList
              data={array}
              renderItem={({ item }) => (
                <View style={{backgroundColor: 'rgba(100, 100, 100, 0.3)', marginTop: 5, padding: 15, borderRadius: 10}}>
                <Text style={{ color: 'white', fontSize: 18 }}>{item.guess}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
      },
      topSection: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
      },
      bottomSection: {
        flex: 1,
      },
      text: {
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
      },
      back: {
        marginTop: 20,
        color: '#999',
        textDecorationLine: 'underline',
      },
      buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      buttonWrapper: {
        flex: 1,
        marginHorizontal: 5,
      },
    });
