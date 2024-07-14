import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const bikes = [
  { id: '1', name: 'Mountain Bike', image: require('./assets/images.jpg') },
  { id: '2', name: 'Dirt Bike', image: require('./assets/picture.jpg') },
  { id: '3', name: 'Racing Bike', image: require('./assets/sport.jpg') },
  { id: '4', name: 'Sport Bike', image: require('./assets/download.jpg') },
  { id: '5', name: 'Road Bike', image: require('./assets/photo.jpg') },
];

const BikeListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {bikes.map(bike => (
        <View key={bike.id} style={styles.card}>
          <Image source={bike.image} style={styles.image} />
          <Text style={styles.name}>{bike.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default BikeListScreen;
