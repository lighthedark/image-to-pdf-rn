import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import { icons } from "../../constants"
import {styles, buttonStyles} from "./home.style";
import useDebouncedTouchableOpacity from "../../components/common/button/Debounce";

const EnhanceCreatedPDFs = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);

  // define a name mapping for the pages
  const pageNames = {
    "AddPassword": "Add Password",
    "RemovePassword": "Remove Password",
    "AddText": "Add Text",
    "RotatePages": "Rotate Pages",
    "AddWatermark": "Add Watermark",
    "AddImages": "Add Images",
  };

  const [handleButtonPress, disabled] = useDebouncedTouchableOpacity((page) => {
    console.log(`Button ${pageNames[page]} pressed`);
    addFeature(pageNames[page]);
    router.push(`/enhance/${page}`);
  });

  return (
    <View>
      <Text style={styles.header}>Enhance Created PDFs</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("AddPassword")} disabled={disabled}>
          <Image
            source={icons.lock}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("RemovePassword")} disabled={disabled}>
          <Image
            source={icons.openLock}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Remove Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("AddText")} disabled={disabled}>
          <Image
            source={icons.text}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("RotatePages")} disabled={disabled}>
          <Image
            source={icons.rotate}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Rotate Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("AddWatermark")} disabled={disabled}>
          <Image
            source={icons.watermark}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Watermark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("AddImages")} disabled={disabled}>
          <Image
            source={icons.add}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Images</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnhanceCreatedPDFs