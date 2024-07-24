import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
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
  { id: '10', brand:'Royal Enfield', name: 'Royal Enfield Himalayan 450', image: require('./assets/id10.jpg') },
  { id: '11', brand: 'BMW', name: 'BMW R 1250 GS', image: require('./assets/id11.jpg') },
  { id: '12', brand:'Yezdi', name: 'Yezdi Adventure', image: require('./assets/id12.jpg') },
];

const BikeListScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handlePress = (bike) => {
    navigation.navigate('BikeDetail', {
      bikeId: bike.id,
      bikeName: bike.name,
    });
  };

  const filteredBikes = bikes.filter(
    bike => bike.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by name or brand"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button
          title="Search"
          onPress={() => {}}
          
        />
      </View>
      <ScrollView>
        {filteredBikes.map((bike) => (
          <TouchableOpacity
            key={bike.id}
            style={styles.card}
            onPress={() => handlePress(bike)}
          >
            <Image source={bike.image} style={styles.image} />
            <Text style={styles.brand}>{bike.brand}</Text>
            <Text style={styles.name}>{bike.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginRight: 10,
  },
  card: {
    backgroundColor: 'orange',
    borderRadius: 8,
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BikeListScreen;
