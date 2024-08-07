import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Taskbar = ({ onPressAbout, onPressPersonalInfo, onPressBikeList, onPressAccessories }) => {
  return (
    <View style={styles.taskbar}>
      <TouchableOpacity style={styles.iconButton} onPress={onPressPersonalInfo}>
        <Icon name="person-outline" size={24} color="white" />
        <Text style={styles.iconText}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onPressBikeList}>
        <Icon name="bicycle-outline" size={24} color="white" />
        <Text style={styles.iconText}>Bikes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onPressAccessories}>
        <Icon name="pricetag-outline" size={24} color="white" />
        <Text style={styles.iconText}>Accs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onPressAbout}>
        <Icon name="information-circle-outline" size={24} color="white" />
        <Text style={styles.iconText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'absolute',
    bottom: 0,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Taskbar;
