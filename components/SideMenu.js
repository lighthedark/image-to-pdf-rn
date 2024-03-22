import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SideMenu = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.menu}>
      {/* Close Button */}
      <TouchableOpacity onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>

      {/* Menu Items */}
      <Text>Your menu items here</Text>
      {/* Add more menu items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '50%',
    backgroundColor: 'white',
    padding: 20,
    zIndex: 100
    // Add more styling as needed
  },
});

export default SideMenu;
