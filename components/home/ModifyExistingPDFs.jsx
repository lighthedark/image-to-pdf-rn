import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './home.style';

const ModifyExistingPDFs = () => {
  const router = useRouter();

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text style={styles.header}>Modify Existing PDFs</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("Merge PDF")}>
          <Text style={styles.buttonText}>Merge PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("Split PDF")}>
          <Text style={styles.buttonText}>Split PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("Invert PDF")}>
          <Text style={styles.buttonText}>Invert PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("Compress PDF")}>
          <Text style={styles.buttonText}>Compress PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("Remove Duplicate")}>
          <Text style={styles.buttonText}>Remove Duplicate</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default ModifyExistingPDFs