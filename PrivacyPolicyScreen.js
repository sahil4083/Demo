import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/98/107/682/best-bikes-boneshaker-79-wallpaper-preview.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Privacy Policy</Text>
          <ScrollView style={styles.content}>
            <Text style={styles.text}>
              This is a placeholder for the privacy policy. 
              Please review our privacy policy to understand how we collect, use, and protect your data. 
              We are committed to ensuring the privacy and security of our users.
            </Text>
          </ScrollView>
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
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default PrivacyPolicyScreen;
