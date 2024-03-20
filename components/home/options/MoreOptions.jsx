import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './moreoptions.style';
import { icons, SIZES } from '../../../constants';

const MoreOptions = () => {
  const router = useRouter();

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text styles={styles.header}>More Options</Text>


      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
          <Text style={styles.buttonText}>Remove Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
          <Text style={styles.buttonText}>Reorder Pages</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
          <Text style={styles.buttonText}>Extract Images</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
          <Text style={styles.buttonText}>PDF to Images</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
          <Text style={styles.buttonText}>Extract Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
          <Text style={styles.buttonText}>ZIP to PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MoreOptions