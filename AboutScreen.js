import React from "react";
import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <ImageBackground
    source={{uri:"https://wallpaper.forfun.com/fetch/d1/d114d147676588f8c97509961ae07fa4.jpeg?h=900&r=0.5"}}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>About BikeKingdom</Text>
        <Text style={styles.text}>
          BikeKingdom is the ultimate app for bike enthusiasts. Whether you're a beginner or a professional rider, our app offers everything you need to enhance your biking experience. From tracking your rides to connecting with other bikers, BikeKingdom has it all.
        </Text>
        <Text style={styles.text}>
          Our mission is to build a community of passionate bikers and provide them with the tools and resources they need to enjoy their rides to the fullest. Join BikeKingdom today and become part of our growing community!
        </Text>
        <Button title="View Bike List" onPress={() => navigation.navigate('BikeList')}></Button>
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
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:"orange"
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
    color:"#000080"
  },
});

export default AboutScreen;
