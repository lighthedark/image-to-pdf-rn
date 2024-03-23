import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './createnewpdf.style';
import { COLORS, icons, SIZES } from '../../../constants';

const CreateNewPDF = () => {
  const router = useRouter();

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your logic for handling button press here
  };


  return (
    <View>
      <Text style={styles.header}>Create new PDF</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL} onPress={() => handleButtonPress("Images to PDF")}>
          <Text style={styles.buttonText}>Images to PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => handleButtonPress("Text to PDF")}>
          <Text style={styles.buttonText}>Text to PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL} onPress={() => handleButtonPress("QR & Barcodes")}>
          <Text style={styles.buttonText}>QR & Barcodes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => handleButtonPress("Excel to PDF")}>
          <Text style={styles.buttonText}>Excel to PDF</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}




export default CreateNewPDF