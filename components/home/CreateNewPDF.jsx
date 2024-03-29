import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { Link, router } from 'expo-router';

import styles from "./home.style";
import { COLORS, icons, SIZES } from '../../constants';

const CreateNewPDF = () => {

  const handleButtonPress = (page) => {
    console.log(`Button ${page} pressed`);
    router.push(`/create/${page}`)
  };

  return (
    <View>
      <Text style={styles.header}>Create new PDF</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("ImageToPDF")}>
          <Text style={styles.buttonText}>Images to PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("TextToPDF")}>
          <Text style={styles.buttonText}>Text to PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("QRAndBarcodes")}>
          <Text style={styles.buttonText}>QR & Barcodes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("ExcelToPDF")}>
          <Text style={styles.buttonText}>Excel to PDF</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}




export default CreateNewPDF