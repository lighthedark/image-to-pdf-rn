import React, { useContext } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import RecentlyUsedContext from './RecentlyUsedContext';
import styles from './recentlyused.style';

const RecentlyUsedFeatures = () => {
    const router = useRouter();
    const { recentlyUsed, addFeature } = useContext(RecentlyUsedContext);
  
    if (recentlyUsed.length === 0) {
      return null;
    }
  
    const handleFeaturePress = (featureName) => {
      console.log(`${featureName} pressed again`);
      addFeature(featureName); // add feature to recently used
      // if featureName is under /app/create, push to create page
      // if (featureName === "Images to PDF") {
      //   router.push(`/create/ImageToPDF`);
      // } else if (featureName === "Text to PDF") {
      //   router.push(`/create/TextToPDF`);
      // } else if (featureName === "QR & Barcodes") {
      //   router.push(`/create/QRAndBarcodes`);
      // } else if (featureName === "Excel to PDF") {
      //   router.push(`/create/ExcelToPDF`);
      // }
    };
  
    // dynamically select style
    const getButtonStyle = (index) => {
      switch (index) {
        case 0: return styles.buttonL;
        case 1: return styles.buttonC; 
        case 2: return styles.buttonR; 
        default: return styles.buttonL; 
      }
    };
  
    return (
      <View>
        <Text style={styles.header}>Recently Used Features</Text>
        <View style={styles.buttonsContainer}>
          {recentlyUsed.slice(0).reverse().map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={getButtonStyle(index)} // dynamically select style
              onPress={() => handleFeaturePress(feature)}
            >
              <Text style={styles.buttonText}>{feature}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
export default RecentlyUsedFeatures;