import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import {styles, buttonStyles} from "./home.style";
import { icons } from "../../constants"
import buttonDebounce from "../../components/common/button/Debounce";

const ModifyExistingPDFs = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);
  
  // define a name mapping for the pages
  const pageNames = {
    "MergePDF": "Merge PDF",
    "SplitPDF": "Split PDF",
    "InvertPDF": "Invert PDF",
    "CompressPDF": "Compress PDF",
    "RemoveDuplicate": "Remove Duplicate"
  };

  const [handleButtonPress, disabled] = buttonDebounce((page) => {
    console.log(`Button ${pageNames[page]} pressed`);
    addFeature(pageNames[page]);
    router.push(`/modify/${page}`);
  });

  return (
    <View>
      <Text style={styles.header}>Modify Existing PDFs</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("MergePDF")} disabled={disabled}>
          <Image
            source={icons.merge}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Merge PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("SplitPDF")} disabled={disabled}>
          <Image
            source={icons.split}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Split PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("InvertPDF")} disabled={disabled}>
          <Image
            source={icons.invertColor}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Invert PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("CompressPDF")} disabled={disabled}>
          <Image
            source={icons.compress}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Compress PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("RemoveDuplicate")} disabled={disabled}>
          <Image
            source={icons.removeDuplicate}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Remove Duplicate</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default ModifyExistingPDFs