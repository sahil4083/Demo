import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet, ImageBackground, Alert } from 'react-native'; 
import { auth } from './assets/Firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        const user = userCredential.user;
        console.log('User logged in:', user.email);
        alert('User logged in successfully');
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.error('Login error:', error.code, error.message);
        // Show alert for incorrect email or password
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          Alert.alert('Login Failed', 'Incorrect email or password.');
        } else {
          Alert.alert('Login Failed', 'An error occurred. Please try again later.');
        }
      });
  }

  return (
    <ImageBackground
      source={{uri:"https://wallpapers.com/images/high/4k-bike-rider-on-orange-bike-7pctj87kkxlg86ms.webp"}}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BikeKingdom Login</Text>
        <View style={styles.outerBox}>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
        </View>
        
        <Button title="Login" onPress={handleLogin}></Button>
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 40,
  },
  outerBox: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default LoginScreen;
