import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import {styles, buttonStyles} from './home.style';
import { icons } from "../../constants"
import useDebouncedTouchableOpacity from "../../components/common/button/Debounce";

const ViewPDFs = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);

  // define a name mapping for the pages
  const pageNames = {
    "ViewFiles": "View Files",
    "History": "History"
  };

  const [handleButtonPress, disabled] = useDebouncedTouchableOpacity((page) => {
    console.log(`Button ${pageNames[page]} pressed`);
    addFeature(pageNames[page]);
    router.push(`/view/${page}`);
  });

  return (
    <View>
      <Text style={styles.header}>View PDFs</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("ViewFiles")} disabled={disabled}>
          <Image
            source={icons.viewFiles}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>View Files</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("History")} disabled={disabled}>
          <Image
            source={icons.history}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ViewPDFs