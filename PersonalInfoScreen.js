import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const PersonalInfoScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/ducati-hypermotard-4k-bike-q0mbiv0zvo8098zy.webp' }}
      style={styles.background}
      imageStyle={styles.image} 
    >
      <View style={styles.container}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={styles.personalInfo}>
          <Text style={styles.personalText}>Name: Sahil Parmar</Text>
          <Text style={styles.personalText}>Since: 2008</Text>
          <Text style={styles.personalText}>Mobile: +91 1968007199</Text>
          <Text style={styles.personalText}>Email: BikeKingdom@gmail.com</Text>
        </View>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="twitter" size={30} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="instagram" size={30} color="#C13584" />
          </TouchableOpacity>
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
  socialMediaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconButton: {
    marginHorizontal: 10,
  },
});

export default PersonalInfoScreen;
