import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';

const LogoScreen = ({ navigation }) => {
  const  navigate = useNavigation()
  useEffect(() => {

    setTimeout(() => {
      navigation.replace('SignUp');
    }, 4000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{uri:"https://img.freepik.com/premium-vector/motorcycle-tshirt-label-design-with-illustration_723616-2568.jpg?size=626&ext=jpg&ga=GA1.1.437211258.1720713982&semt=ais_user"}}
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
