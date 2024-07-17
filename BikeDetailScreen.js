import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BikeDetailScreen = ({ route }) => {
  const { bikeId, bikeName } = route.params;

    const bikeDetails = {
    '1': { name: 'Mountain Bike', description: 'Great for off-road trails.', image: require('./assets/images.jpg') },
    '2': { name: 'Dirt Bike', description: 'Designed for rough terrains.', image: require('./assets/dirt.jpg') },
    '3': { name: 'Racing Bike', description: 'Built for speed on paved roads.', image: require('./assets/racing.jpg') },
    '4': { name: 'Sport Bike', description: 'Versatile bike for various terrains.', image: require('./assets/sport.jpg') },
    '5': { name: 'Road Bike', description: 'Ideal for long rides on smooth roads.', image: require('./assets/road.jpg') },
  };

  
  const bike = bikeDetails[bikeId];

  if (!bike) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bike details not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={bike.image} style={styles.image} />
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.description}>{bike.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default BikeDetailScreen;
