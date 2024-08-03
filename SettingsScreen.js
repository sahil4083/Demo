import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/98/107/682/best-bikes-boneshaker-79-wallpaper-preview.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option} onPress={() => alert('Feature not implemented')}>
            <Text style={styles.optionText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => alert('Feature not implemented')}>
            <Text style={styles.optionText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => alert('Feature not implemented')}>
            <Text style={styles.optionText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  optionContainer: {
    marginBottom: 20,
  },
  option: {
    padding: 10,
    backgroundColor: '#ffffffa0',
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingsScreen;
