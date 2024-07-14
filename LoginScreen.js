import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'sahil' && password === 'parmar') {
      navigation.navigate('Home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/photo.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BikeKingdom Login</Text>
        <View style={styles.outerBox}>
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
