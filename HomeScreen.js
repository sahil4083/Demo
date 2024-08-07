import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Taskbar from './Taskbar'; 

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/98/107/682/best-bikes-boneshaker-79-wallpaper-preview.jpg' }}
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
          
      
          <View style={styles.featureContainer}>
            <Text style={styles.featureTitle}>Explore our Features</Text>
            <View style={styles.featureList}>
              
          </View>
          </View>
          
  
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg' }} style={styles.profileImage} />
            <Text style={styles.profileName}>Hello, User!</Text>
          </View>

          <View style={styles.updateContainer}>
            <Text style={styles.updateTitle}>Latest Updates</Text>
            <Text style={styles.updateText}>New bikes and accessories available!</Text>
          </View>
        </View>
      </View>
      <Taskbar
        onPressAbout={() => navigation.navigate('About')} 
        onPressPersonalInfo={() => navigation.navigate('PersonalInfo')}
        onPressBikeList={() => navigation.navigate('BikeList')}
        onPressAccessories={() => navigation.navigate('Accessories')}
      />
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
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  featureContainer: {
    marginVertical: 20,
  },
  featureTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  featureList: {
    flexDirection: 'row',
  },
  featureItem: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
  },
  featureItemText: {
    color: 'white',
    fontSize: 16,
  },
  profileContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
  },
  updateContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  updateTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  updateText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
