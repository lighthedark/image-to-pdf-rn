import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './modifyexistingpdfs.style';
import { icons, SIZES } from '../../../constants';

const ModifyExistingPDFs = () => {
  const router = useRouter();

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text styles={styles.header}>Modify Existing PDFs</Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
          <Text style={styles.buttonText}>Merge PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
          <Text style={styles.buttonText}>Split PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
          <Text style={styles.buttonText}>Invert PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
          <Text style={styles.buttonText}>Compress PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
          <Text style={styles.buttonText}>Remove Duplicate</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default ModifyExistingPDFs