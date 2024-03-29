import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SideMenu = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.menu}>
      <Text style={styles.sectionHeader}>PDF Converter</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View files</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Merge PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Text to PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      <View style={styles.sectionSpacer} />

      <Text style={styles.sectionSubHeader}>Extras</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share</Text>
      </TouchableOpacity>



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
    zIndex: 1000
  },
  sectionHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      paddingBottom: 20,
  },
  sectionSubHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      paddingBottom: 20,
      color: 'gray',
  },
  sectionSpacer: {
    marginVertical: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default SideMenu;
