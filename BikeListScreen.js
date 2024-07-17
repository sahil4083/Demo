import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const bikes = [
  { id: '1', name: 'Mountain Bike', image: require('./assets/images.jpg') },
  { id: '2', name: 'Dirt Bike', image: require('./assets/dirt.jpg') },
  { id: '3', name: 'Racing Bike', image: require('./assets/racing.jpg') },
  { id: '4', name: 'Sport Bike', image: require('./assets/sport.jpg') },
  { id: '5', name: 'Road Bike', image: require('./assets/road.jpg') },
];

const BikeListScreen = () => {
  const navigation = useNavigation();

  const handlePress = (bike) => {
    navigation.navigate('BikeDetail', {
      bikeId: bike.id,
      bikeName: bike.name,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {bikes.map((bike) => (
        <TouchableOpacity
          key={bike.id}
          style={styles.card}
          onPress={() => handlePress(bike)}
        >
          <Image source={bike.image} style={styles.image} />
          <Text style={styles.name}>{bike.name}</Text>
        </TouchableOpacity>
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
    backgroundColor: 'orange',
    borderRadius: 8,
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    elevation: 2,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default BikeListScreen;
