import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
    source={{uri:"https://wallpapers.com/images/high/ducati-hypermotard-4k-bike-q0mbiv0zvo8098zy.webp"}}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.personalInfo}>
          <Text style={styles.personalText}>Name:- Sahil Parmar</Text>
          <Text style={styles.personalText}>since:- 2008</Text>
          <Text style={styles.personalText}>Mobile:- +91 1968007199</Text>
          <Text style={styles.personalText}>Email:- BikeKingdom@gmail.com</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to BikeKingdom!</Text>
          <Button title="View Bike List" onPress={() => navigation.navigate('BikeList')}></Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: 'purple'
  },
  container: {
    flex: 1,
    flexDirection: 'colum', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  personalInfo: {
    marginRight: 16, 
  },
  personalText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default HomeScreen;
