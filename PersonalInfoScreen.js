import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';

const PersonalInfoScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/ducati-hypermotard-4k-bike-q0mbiv0zvo8098zy.webp' }}
      style={styles.background}
      imageStyle={styles.image} // Ensure that the image is displayed as intended
    >
      <View style={styles.container}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={styles.personalInfo}>
          <Text style={styles.personalText}>Name: Sahil Parmar</Text>
          <Text style={styles.personalText}>Since: 2008</Text>
          <Text style={styles.personalText}>Mobile: +91 1968007199</Text>
          <Text style={styles.personalText}>Email: BikeKingdom@gmail.com</Text>
        </View>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
          color="#007BFF"
        />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10, 
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: 'orange',
    fontWeight: 'bold', 
  },
  personalInfo: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  personalText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold', 
  },
});

export default PersonalInfoScreen;
