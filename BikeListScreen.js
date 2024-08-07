import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const filtered = bikes.filter(
      bike => 
        bike.brand.toLowerCase().includes(lowercasedQuery) || 
        bike.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBikes(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredBikes(bikes);
  };

  const handlePress = (bike) => {
    navigation.navigate('BikeDetail', {
      bikeId: bike.id,
      bikeBrand: bike.brand,
      bikeName: bike.name,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search bikes..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Icon name="close-circle-outline" size={20} color="gray" />
          </TouchableOpacity>
        ) : null}
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredBikes.length > 0 ? (
          filteredBikes.map((bike) => (
            <TouchableOpacity
              key={bike.id}
              style={styles.card}
              onPress={() => handlePress(bike)}
            >
              <Image source={bike.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.brand}>{bike.brand}</Text>
                <Text style={styles.name}>{bike.name}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResults}>No bikes found.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchInput: {
    height: 50,
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    elevation: 3,
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  clearButton: {
    position: 'absolute',
    right: 10,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    elevation: 2,
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  brand: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    fontSize: 16,
    color: 'yellow',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});

export default BikeListScreen;
