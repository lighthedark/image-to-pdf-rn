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
      <Text>Menu items here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '65%',
    backgroundColor: 'white',
    padding: 20,
    zIndex: 100
  },
});

export default SideMenu;
