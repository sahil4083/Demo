import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const accessories = [
  { id: '1', name: 'Helmet', image: 'https://m.media-amazon.com/images/I/61mGAYqPEhL.jpg' },
  { id: '2', name: 'Riding Gloves', image: 'https://m.media-amazon.com/images/I/61WQF4EfeTL._AC_UF1000,1000_QL80_.jpg' },
  { id: '3', name: 'Lights', image: 'https://m.media-amazon.com/images/I/51rUeALu7eL._AC_UF1000,1000_QL80_.jpg' },
  { id: '4', name: 'Riding Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8WvSnRQzTyxrflhnakLBFY8DdgtFt90xqg&s' },
  { id: '5', name: 'Riding Pants', image: 'https://openroad.in/wp-content/uploads/2024/03/RynoxStealthEvo2022PantsGrey01_1200x.webp' },
  { id: '6', name: 'Riding Shoes', image: 'https://www.helmetwala.com/cdn/shop/files/T-rex-fl.yel-1.webp?v=1699766653&width=533' },
  { id: '7', name: 'Silencer', image: 'https://cdn.moglix.com/p/rQNRnfIeAhazW-xxlarge.jpg' },
];

const AccessoriesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePressImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={accessories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePressImage(item.image)}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
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
    width: width - 32,
    height: width - 32,
    borderRadius: 8,
  },
});

export default AccessoriesScreen;
