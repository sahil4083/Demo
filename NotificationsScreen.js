import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const notifications = [
  'You have a new message from the support team.',
  'Your password was changed successfully.',
  'New updates are available for your app.',
  'Your account settings have been updated.',
];

const NotificationsScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/98/107/682/best-bikes-boneshaker-79-wallpaper-preview.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Notifications</Text>
          <ScrollView style={styles.notificationsContainer}>
            {notifications.map((notification, index) => (
              <View key={index} style={styles.notificationItem}>
                <Text style={styles.notificationText}>{notification}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  notificationText: {
    fontSize: 16,
    color: '#fff', 
  },
});

export default NotificationsScreen;
