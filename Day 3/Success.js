import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function Success({ onGoBack }) {
  return (
    <View style={styles.container}>
      {/* GIF that floats on top */}
      <Video
        source={require('../assets/images/video.mp4')}
        style={styles.image}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay
      />

      <View style={styles.content}>
        <Text style={styles.title}>You won the game!</Text>

        <TouchableOpacity style={styles.button} onPress={onGoBack}>
          <Text style={styles.buttonText}>🔙 Replay Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  content: {
    marginTop: 50, // Leave space for the gif
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'limegreen',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
