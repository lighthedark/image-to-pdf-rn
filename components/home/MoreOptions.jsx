import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import {styles, buttonStyles} from "./home.style";
import { COLORS, icons } from "../../constants"
import buttonDebounce from "../../components/common/button/Debounce";

const MoreOptions = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);
  
  // define a name mapping for the pages
  const pageNames = {
    "RemovePages": "Remove Pages",
    "ReorderPages": "Reorder Pages",
    "ExtractImages": "Extract Images",
    "PDFtoImages": "PDF to Images",
    "ExtractText": "Extract Text",
    "ZIPtoPDF": "ZIP to PDF",
  };

  const [handleButtonPress, disabled] = buttonDebounce((page) => {
    console.log(`Button ${pageNames[page]} pressed`);
    addFeature(pageNames[page]);
    router.push(`/options/${page}`);
  });

  return (
    <View>
      <Text style={styles.header}>More Options</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("RemovePages")} disabled={disabled}>
          <Image
            source={icons.removePage}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Remove Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("ReorderPages")} disabled={disabled}>
          <Image
            source={icons.reorder}
            resizeMode='cover'
            style={ {
              width: 75,
              height: 75,
              marginTop: -25,
              marginBottom: -5,
              tintColor: COLORS.colorPrimary
            }}
          />
          <Text style={styles.buttonText}>Reorder Pages</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("ExtractImages")} disabled={disabled}>
          <Image
            source={icons.broken}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Extract Images</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("PDFtoImages")} disabled={disabled}>
          <Image
            source={icons.image}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>PDF to Images</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("ExtractText")} disabled={disabled}>
          <Image
            source={icons.text}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Extract Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("ZIPtoPDF")} disabled={disabled}>
          <Image
            source={icons.zip}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>ZIP to PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MoreOptions