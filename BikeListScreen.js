import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const bikes = [
  { id: '1', brand: 'Aprilia', name: 'Aprilia RSV4', image: require('./assets/id1.jpg') },
  { id: '2', brand: 'Suzuki', name: 'Suzuki Hayabusa', image: require('./assets/id2.jpg') },
  { id: '3', brand: 'KTM', name: 'KTM 390 Duke', image: require('./assets/id3.jpg') },
  { id: '4', brand: 'Kawasaki', name: 'Kawasaki Ninja ZX-10R', image: require('./assets/id4.jpg') },
  { id: '5', brand: 'BMW', name: 'BMW M 1000 RR', image: require('./assets/id5.jpg') },
  { id: '6', brand: 'Kawasaki', name: 'Kawasaki Ninja H2 SX', image: require('./assets/id6.jpg') },
  { id: '7', brand: 'Ducati', name: 'Ducati Panigale V4', image: require('./assets/id7.jpg') },
  { id: '8', brand: 'Royal Enfield', name: 'Continental GT 650', image: require('./assets/id8.jpg') },
  { id: '9', brand: 'Royal Enfield', name: 'Royal Enfield Classic 350', image: require('./assets/id9.jpg') },
  { id: '10', brand: 'Royal Enfield', name: 'Royal Enfield Himalayan 450', image: require('./assets/id10.jpg') },
  { id: '11', brand: 'BMW', name: 'BMW R 1250 GS', image: require('./assets/id11.jpg') },
  { id: '12', brand: 'Yezdi', name: 'Yezdi Adventure', image: require('./assets/id12.jpg') },
];

const BikeListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBikes, setFilteredBikes] = useState(bikes);
  const [favorites, setFavorites] = useState(new Set());
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = bikes.filter(bike =>
      bike.brand.toLowerCase().includes(query.toLowerCase()) ||
      bike.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBikes(filtered);
  };

  const handlePress = (bike) => {
    navigation.navigate('BikeDetail', {
      bikeId: bike.id,
      bikeBrand: bike.brand,
      bikeName: bike.name,
    });
  };

  const toggleFavorite = (bikeId) => {
    setFavorites(prevFavorites => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(bikeId)) {
        updatedFavorites.delete(bikeId);
      } else {
        updatedFavorites.add(bikeId);
      }
      return updatedFavorites;
    });
  };

  const isFavorite = (bikeId) => {
    return favorites.has(bikeId);
  };

  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by brand or name"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView style={styles.scrollView}>
        {filteredBikes.length > 0 ? (
          filteredBikes.map((bike) => (
            <TouchableOpacity
              key={bike.id}
              style={styles.card}
              onPress={() => handlePress(bike)}
            >
              <Image source={bike.image} style={styles.image} />
              <Text style={styles.brand}>{bike.brand}</Text>
              <Text style={styles.name}>{bike.name}</Text>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => toggleFavorite(bike.id)}
              >
               
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResults}>No bikes found.</Text>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.aboutButton]} onPress={navigateToAbout}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'gray'
  },
  searchInput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  scrollView: {
    flex: 4,
  },
  card: {
    backgroundColor: 'orange',
    borderRadius: 8,
    shadowColor: 'black',
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
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'yellow',
  },
  buttonContainer: {
    padding: 10,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  aboutButton: {
    backgroundColor: 'brown',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteText: {
    fontSize: 24,
  },
});

export default BikeListScreen;
