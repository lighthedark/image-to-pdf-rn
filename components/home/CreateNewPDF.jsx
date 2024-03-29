import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import styles from "./home.style";

const CreateNewPDF = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);

  // define a name mapping for the pages
  const pageNames = {
    "ImageToPDF": "Images to PDF",
    "TextToPDF": "Text to PDF",
    "QRAndBarcodes": "QR & Barcodes",
    "ExcelToPDF": "Excel to PDF",
  };

  const handleButtonPress = (page) => {
    console.log(`Button ${pageNames[page]} pressed`);
    addFeature(pageNames[page]);
    router.push(`/create/${page}`);
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