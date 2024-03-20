import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './viewpdfs.style';
import { icons, SIZES } from '../../../constants';

const ViewPDFs = () => {
  const router = useRouter();

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text styles={styles.header}>View PDFs</Text>


      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
          <Text style={styles.buttonText}>View Files</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

    </View>

    
  )
}

export default ViewPDFs