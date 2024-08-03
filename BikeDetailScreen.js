import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Modal, TouchableOpacity } from 'react-native';

const BikeDetailScreen = ({ route, navigation }) => {
  const { bikeId } = route.params;

  const bikeDetails = {
    '1': { brand: 'Aprilia', name: 'Aprilia RSV4', description: 'Engine Capacity:-1077cc,\nTop speed:- 305 kmph ,\n Mileage:- 15.4 kmpl,\n Fuel Capacity:- 17.9 litres,\n Price:-₹23.69 lakh', image: require('./assets/id1.jpg') },
    '2': { brand: 'Suzuki', name: 'Suzuki Hayabusa', description: 'Engine Capacity:-1340,\nTop Speed:- 186 kmph,\n Mileage:- 18 kmpl,\n Fuel Capacity:- 20 litres,\n Price:-₹16.90 lakh', image: require('./assets/id2.jpg') },
    '3': { brand: 'KTM', name: 'KTM 390 Duke', description: 'Engine Capacity:-398.63cc,\nTop Speed:- 167 kmph,\n Mileage:- 28 kmpl,\n Fuel Capacity:- 15 litres,\n Price:-₹3.11 lakh ', image: require('./assets/id3.jpg') },
    '4': { brand: 'Kawasaki', name: 'Kawasaki Ninja ZX-10R', description: 'Engine Capacity:-998cc,\nTop Speed:-299 Kmph,\n Mileage:-15 kmpl, \nFuel Capacity:- 17 liters,\n Price:-₹ 16.47 Lakh ', image: require('./assets/id4.jpg') },
    '5': { brand: 'BMW', name: 'BMW M 1000 RR', description: 'Engine Capacity:-999cc,\nTop Speed:-306kmph,\n Mileage, 15.3kmpl,\n Fuel Capacity:- 16 leaters,\n Price:-₹ 49 - 55 Lakh ', image: require('./assets/id5.jpg') },
    '6': { brand: 'Kawasaki', name: 'Kawasaki Ninja H2 SX', description: 'Engine Capacity:-1043cc,\nTop Speed:-331kmph,\n Mileage, 15kmpl,\n Fuel Capacity:- 19 leaters,\n Price:-₹ 31.95 Lakh ', image: require('./assets/id6.jpg') },
    '7': { brand: 'Ducati', name: 'Ducati Panigale V4', description: 'Engine Capacity:-1103cc,\n Top Speed:-120 to 299kmph,\n Mileage, 15kmpl,\n Fuel Capacity:- 17leaters,\n Price:-₹ 27.73 - ₹ 33.48 Lakh ', image: require('./assets/id7.jpg') },
    '8': { brand: 'Royal Enfield', name: 'Continental GT 650', description: 'Engine Capacity:-648cc,\n Top Speed:-161kmph,\n Mileage:- 27kmpl,\n Fuel Capacity:- 12.5leaters,\n Price:-₹ 3.19 - ₹ 3.45 Lakh ', image: require('./assets/id8.jpg') },
    '9': { brand: 'Royal Enfield', name: 'Royal Enfield Classic 350', description: 'Engine Capacity:-349cc,\n Top Speed:-115 to 131kmph,\n Mileage:- 41.5kmpl,\n Fuel Capacity:- 13leaters,\n Price:-₹ 1.93 - ₹ 2.25 Lakh ', image: require('./assets/id9.jpg') },
    '10': { brand: 'Royal Enfield', name: 'Royal Enfield Himalayan 450', description: 'Engine Capacity:-452cc,\n Top Speed:122-kmph,\n Mileage:- 30kmpl,\n Fuel Capacity:-17leaters,\n Price:-₹2.98 Lakh ', image: require('./assets/id10.jpg') },
    '11': { brand: 'BMW', name: 'BMW R 1250 GS', description: 'Engine Capacity:-1254cc,\n Top Speed:-200kmph,\n Mileage:- 15kmpl,\n Fuel Capacity:-18 leaters,\n Price:-₹20.55Lakh ', image: require('./assets/id11.jpg') },
    '12': { brand: 'Yezdi', name: 'Yezdi Adventure', description: 'Engine Capacity:-334cc,\n Top Speed:-140kmph,\n Mileage:- 30kmpl,\n Fuel Capacity:-15.5 leaters,\n Price:- ₹ 2.16 - 2.28Lakh ', image: require('./assets/id12.jpg') },
  };

  const bike = bikeDetails[bikeId];

  if (!bike) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bike details not found.</Text>
      </View>
    );
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleBuyNow = () => {
    navigation.navigate('PersonalInfo', {
      bikeId: bikeId,
      bikeName: bike.name,
      bikePrice: bike.description.match(/Price:-([^\n]*)/)[1].trim(), 
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={bike.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.brand}>{bike.brand}</Text>
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.description}>{bike.description}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Buy Now"
          onPress={handleBuyNow}
          color="#FF4500"
        />
      </View>

    
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setModalVisible(false)}
          >
            <Image
              source={bike.image}
              style={styles.modalImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "lightblue",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'purple',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    borderRadius: 8,
  },
});

export default BikeDetailScreen;
