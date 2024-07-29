import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://wallpaper.forfun.com/fetch/d1/d114d147676588f8c97509961ae07fa4.jpeg?h=900&r=0.5" }}
      style={styles.background}
      imageStyle={styles.image} // Optionally customize the image styling
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>About BikeKingdom</Text>
        <Text style={styles.text}>
          Welcome to Bike Kingdom, your ultimate destination for exploring a wide range of bikes! Our app provides a comprehensive platform where bike enthusiasts and potential buyers can:
        </Text>
        <Text style={styles.text}>
          Browse Bike Details: Discover detailed specifications for each bike, including performance metrics, features, and other essential information.
        </Text>
        <Text style={styles.text}>
          View Prices: Get up-to-date pricing information to make informed decisions and compare options.
        </Text>
        <Text style={styles.text}>
          See Images: Explore high-quality images of bikes to get a closer look at their design and style.
        </Text>
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

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: "orange",
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
    color: "white",
  },
});

export default AboutScreen;
