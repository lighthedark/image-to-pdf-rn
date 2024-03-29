import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './home.style';
import { icons, SIZES } from '../../constants';

const EnhanceCreatedPDFs = () => {
  const router = useRouter();

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text style={styles.header}>Enhance Created PDFs</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("Add password")}>
          <Text style={styles.buttonText}>Add password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("Remove password")}>
          <Text style={styles.buttonText}>Remove password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("Add Text")}>
          <Text style={styles.buttonText}>Add Text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("Rotate Pages")}>
          <Text style={styles.buttonText}>Rotate Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("Add Watermark")}>
          <Text style={styles.buttonText}>Add Watermark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("Add Images")}>
          <Text style={styles.buttonText}>Add Images</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnhanceCreatedPDFs