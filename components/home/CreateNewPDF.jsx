import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import {styles, buttonStyles} from "./home.style";
import { icons } from "../../constants"
import useDebouncedTouchableOpacity from "../../components/common/button/Debounce";

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

  const [handleButtonPress, disabled] = useDebouncedTouchableOpacity((page) => {
    console.log(`Button ${pageNames[page]} pressed`);
    addFeature(pageNames[page]);
    router.push(`/create/${page}`);
  });

  return (
    <View>
      <Text style={styles.header}>Create New PDF</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("ImageToPDF")} disabled={disabled}>
          <Image
            source={icons.image}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Images to PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("TextToPDF")} disabled={disabled}>
          <Image
            source={icons.text}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Text to PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("QRAndBarcodes")} disabled={disabled}>
          <Image
            source={icons.qrcode}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>QR & Barcodes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("ExcelToPDF")} disabled={disabled}>
          <Image
            source={icons.excel}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Excel to PDF</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}




export default CreateNewPDF