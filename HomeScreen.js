import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri:'https://c4.wallpaperflare.com/wallpaper/98/107/682/best-bikes-boneshaker-79-wallpaper-preview.jpg'}}
      style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name="settings-outline" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to BikeKingdom!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PersonalInfo')}
            >
              <Text style={styles.buttonText}>Personal Info</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('BikeList')}
            >
              <Text style={styles.buttonText}>View Bike List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Accessories')} 
            >
              <Text style={styles.buttonText}>View Accessories</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});

export default HomeScreen;
