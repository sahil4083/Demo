import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/ducati-hypermotard-4k-bike-q0mbiv0zvo8098zy.webp' }}
      style={styles.background}
      imageStyle={styles.image} // Ensures that the image is displayed as intended
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to BikeKingdom!</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Personal Info"
              onPress={() => navigation.navigate('PersonalInfo')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="View Bike List"
              onPress={() => navigation.navigate('BikeList')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  
  
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
