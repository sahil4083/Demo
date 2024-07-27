import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { auth } from './assets/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './assets/Firebase'; 

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      // Save username to Firestore
      await addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        username: username,
        email: email,
      });
      Alert.alert('Success', 'User created successfully');
      navigation.navigate('Home'); 
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Signup Failed', error.message);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login'); 
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/4k-bike-rider-on-orange-bike-7pctj87kkxlg86ms.webp' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BikeKingdom Sign Up</Text>
        <View style={styles.outerBox}>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Username"
            value={username}
            onChangeText={text => setUsername(text)}
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
        <Button title="Sign Up" onPress={handleSignup} />
        <Button title="Already have an account? Login" onPress={navigateToLogin} color="#007BFF" />
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

export default Signup;
