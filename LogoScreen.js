import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LogoScreen = ({ navigation }) => {
  useEffect(() => {

    setTimeout(() => {
      navigation.replace('Login');
    }, 4000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Login.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}> Bike Kingdom </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  logo: {
    width: 250, 
    height: 250, 
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LogoScreen;
