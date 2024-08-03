import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const accessories = [
  { id: '1', name: 'Helmet', image: 'https://m.media-amazon.com/images/I/61mGAYqPEhL.jpg', price: '₹2249' },
  { id: '2', name: 'Riding Gloves', image: 'https://m.media-amazon.com/images/I/61WQF4EfeTL._AC_UF1000,1000_QL80_.jpg', price: '₹790' },
  { id: '3', name: 'Lights', image: 'https://m.media-amazon.com/images/I/51rUeALu7eL._AC_UF1000,1000_QL80_.jpg', price: '₹927' },
  { id: '4', name: 'Riding Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8WvSnRQzTyxrflhnakLBFY8DdgtFt90xqg&s', price: '₹7999' },
  { id: '5', name: 'Riding Pants', image: 'https://openroad.in/wp-content/uploads/2024/03/RynoxStealthEvo2022PantsGrey01_1200x.webp', price: '₹6950' },
  { id: '6', name: 'Riding Shoes', image: 'https://www.helmetwala.com/cdn/shop/files/T-rex-fl.yel-1.webp?v=1699766653&width=533', price: '₹140000' },
  { id: '7', name: 'Silencer', image: 'https://cdn.moglix.com/p/rQNRnfIeAhazW-xxlarge.jpg', price: '₹1550' },
];

const AccessoriesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const handlePressImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  const handleBuyNow = (itemName) => {
    navigation.navigate('PersonalInfo'); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={accessories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => handlePressImage(item.image)}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => handleBuyNow(item.name)}
            >
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToAbout}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>

      {selectedImage && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={{ uri: selectedImage }}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 16,
  },
  list: {
    paddingBottom: 60,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'orange',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
  },
  buyButton: {
    backgroundColor: 'brown',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 8,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'brown',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: width - 32,
    height: width - 32,
    borderRadius: 8,
  },
});

export default AccessoriesScreen;
