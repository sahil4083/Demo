import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';

const AboutScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>About BikeKingdom</Text>
        <Text style={styles.text}>
          BikeKingdom is the ultimate app for bike enthusiasts. Whether you're a beginner or a professional rider, our app offers everything you need to enhance your biking experience. From tracking your rides to connecting with other bikers, BikeKingdom has it all.
        </Text>
        <Text style={styles.text}>
          Our mission is to build a community of passionate bikers and provide them with the tools and resources they need to enjoy their rides to the fullest. Join BikeKingdom today and become part of our growing community!
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default AboutScreen;
