import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, icons } from "../../../constants"

const SideMenu = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.menu}>
      <View style={styles.headerContent}>
        <Image
          source={icons.logo_round}
          style={styles.headerImage}
        />
        <Text style={styles.sectionHeader}>PDF Converter</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={icons.camera}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Create PDF</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={icons.gallery}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>View Files</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={icons.merge}
            style={styles.buttonImage2}
          />
          <Text style={styles.buttonText}>Merge PDF</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={icons.text}
            style={styles.buttonImage2}
          />
          <Text style={styles.buttonText}>Text to PDF</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.sectionSpacer} />

      <Text style={styles.sectionSubHeader}>Extras</Text>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={icons.about_us}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>About Us</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={icons.help}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Help</Text>
        </View>
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 0,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginBottom: 20,
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  buttonImage: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  buttonImage2: {
    width: 28,
    height: 25,
    marginRight: 6,
  },
});

export default SideMenu;
