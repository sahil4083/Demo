import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BikeDetailScreen = ({ route }) => {
  const { bikeId, bikeName } = route.params;
  const navigation = useNavigation();

  const bikeDetails = {
    '1': { brand: 'Aprilia', name: 'Aprilia RSV4', description: 'Engine Capacity: 1077cc, Top speed: 305 kmph, Mileage: 15.4 kmpl, Fuel Capacity: 17.9 litres, Price: ₹23.69 lakh', image: require('./assets/id1.jpg') },
    '2': { brand: 'Suzuki', name: 'Suzuki Hayabusa', description: 'Engine Capacity: 1340cc, Top Speed: 186 kmph, Mileage: 18 kmpl, Fuel Capacity: 20 litres, Price: ₹16.90 lakh', image: require('./assets/id2.jpg') },
    '3': { brand: 'KTM', name: 'KTM 390 Duke', description: 'Engine Capacity: 398.63cc, Top Speed: 167 kmph, Mileage: 28 kmpl, Fuel Capacity: 15 litres, Price: ₹3.11 lakh', image: require('./assets/id3.jpg') },
    '4': { brand: 'Kawasaki', name: 'Kawasaki Ninja ZX-10R', description: 'Engine Capacity: 998cc, Top Speed: 299 kmph, Mileage: 15 kmpl, Fuel Capacity: 17 liters, Price: ₹16.47 Lakh', image: require('./assets/id4.jpg') },
    '5': { brand: 'BMW', name: 'BMW M 1000 RR', description: 'Engine Capacity: 999cc, Top Speed: 306 kmph, Mileage: 15.3 kmpl, Fuel Capacity: 16 liters, Price: ₹49 - 55 Lakh', image: require('./assets/id5.jpg') },
    '6': { brand: 'Kawasaki', name: 'Kawasaki Ninja H2 SX', description: 'Engine Capacity: 1043cc, Top Speed: 331 kmph, Mileage: 15 kmpl, Fuel Capacity: 19 liters, Price: ₹31.95 Lakh', image: require('./assets/id6.jpg') },
    '7': { brand: 'Ducati', name: 'Ducati Panigale V4', description: 'Engine Capacity: 1103cc, Top Speed: 120 to 299 kmph, Mileage: 15 kmpl, Fuel Capacity: 17 liters, Price: ₹27.73 - ₹33.48 Lakh', image: require('./assets/id7.jpg') },
    '8': { brand: 'Royal Enfield', name: 'Continental GT 650', description: 'Engine Capacity: 648cc, Top Speed: 161 kmph, Mileage: 27 kmpl, Fuel Capacity: 12.5 liters, Price: ₹3.19 - ₹3.45 Lakh', image: require('./assets/id8.jpg') },
    '9': { brand: 'Royal Enfield', name: 'Royal Enfield Classic 350', description: 'Engine Capacity: 349cc, Top Speed: 115 to 131 kmph, Mileage: 41.5 kmpl, Fuel Capacity: 13 liters, Price: ₹1.93 - ₹2.25 Lakh', image: require('./assets/id9.jpg') },
    '10': { brand: 'Royal Enfield', name: 'Royal Enfield Himalayan 450', description: 'Engine Capacity: 452cc, Top Speed: 122 kmph, Mileage: 30 kmpl, Fuel Capacity: 17 liters, Price: ₹2.98 Lakh', image: require('./assets/id10.jpg') },
    '11': { brand: 'BMW', name: 'BMW R 1250 GS', description: 'Engine Capacity: 1254cc, Top Speed: 200 kmph, Mileage: 15 kmpl, Fuel Capacity: 18 liters, Price: ₹20.55 Lakh', image: require('./assets/id11.jpg') },
    '12': { brand: 'Yezdi', name: 'Yezdi Adventure', description: 'Engine Capacity: 334cc, Top Speed: 140 kmph, Mileage: 30 kmpl, Fuel Capacity: 15.5 liters, Price: ₹2.16 - ₹2.28 Lakh', image: require('./assets/id12.jpg') },
  };

  const bike = bikeDetails[bikeId];

  if (!bike) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bike details not found.</Text>
      </View>
    );
  }

  const handleAbout = () => {
    navigation.navigate('AboutScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={bike.image} style={styles.image} />
      <Text style={styles.brand}>{bike.brand}</Text>
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.description}>{bike.description}</Text>
      <Button title="View About" onPress={() => navigation.navigate('About')} ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'gray',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BikeDetailScreen;
