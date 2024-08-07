import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() === '') {
      Alert.alert('Error', 'Message cannot be empty');
      return;
    }

    console.log('Message sent:', message);
    Alert.alert('Success', 'Message sent successfully');
    setMessage('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/98/107/682/best-bikes-boneshaker-79-wallpaper-preview.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <Icon name="lock-closed-outline" size={24} color="#333" />
            <Text style={styles.optionText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Icon name="notifications-outline" size={24} color="#333" />
            <Text style={styles.optionText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          >
            <Icon name="shield-checkmark-outline" size={24} color="#333" />
            <Text style={styles.optionText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message here"
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  optionContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffffa0',
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  messageContainer: {
    marginVertical: 20,
    width: '80%',
  },
  textInput: {
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingsScreen;
