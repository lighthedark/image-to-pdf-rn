import React, { useContext } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RecentlyUsedContext from './RecentlyUsedContext';
import styles from './recentlyused.style.js';
import { icons } from "../../../constants"
import {buttonStyles} from "../home.style";
import { get } from 'lodash';

// const RecentlyUsedFeatures = () => {
  //   const router = useRouter();
  //   const { recentlyUsed, addFeature } = useContext(RecentlyUsedContext);
  
  //   if (recentlyUsed.length === 0) {
  //     return null;
  //   }

  
  //   const handleFeaturePress = (featureName) => {
  //     console.log(`${featureName} pressed again`);
  //     addFeature(featureName); // add feature to recently used
  //     // if featureName is under /app/create, push to create page
  //     // if (featureName === "Images to PDF") {
  //     //   router.push(`/create/ImageToPDF`);
  //     // } else if (featureName === "Text to PDF") {
  //     //   router.push(`/create/TextToPDF`);
  //     // } else if (featureName === "QR & Barcodes") {
  //     //   router.push(`/create/QRAndBarcodes`);
  //     // } else if (featureName === "Excel to PDF") {
  //     //   router.push(`/create/ExcelToPDF`);
  //     // }
  //   };
  
  //   // dynamically select style
  //   // const getButtonStyle = (index) => {
  //   //   switch (index) {
  //   //     case 0: return styles.buttonL3;
  //   //     case 1: return styles.buttonC3; 
  //   //     case 2: return styles.buttonR3; 
  //   //     default: return styles.buttonL3; 
  //   //   }
  //   // };
  //   const getButtonStyle = (index) => {
  //     const numFeatures = recentlyUsed.length;
  //     // Adjust style based on number of features
  //     switch (numFeatures) {
  //         case 1: // Only one feature, position it on the left
  //             return styles.buttonL3;  // Assuming buttonL is a suitable style for single centered button
  //         case 2: // Two features, position most recent in the center, second in the left
  //             return index === 0 ? styles.buttonC2 : styles.buttonL2;
  //         case 3: // Three or more features, position normally
  //             switch (index) {
  //                 case 0: return styles.buttonL3;
  //                 case 1: return styles.buttonC3; 
  //                 case 2: return styles.buttonR3; 
  //                 default: return styles.buttonL3; 
  //             }
  //         default: // More than three, use default positioning
  //             switch (index % 3) { // Cycle through L3, C3, R3 for more than three buttons
  //                 case 0: return styles.buttonL3;
  //                 case 1: return styles.buttonC3;
  //                 case 2: return styles.buttonR3;
  //             }
  //     }
  // };

  //   // dynamically select icons given feature
    

  //   return (
  //     <View>
  //       <Text style={styles.header}>Recently Used Features</Text>
  //       <View style={styles.buttonsContainer}>
  //         {recentlyUsed.slice(0).reverse().map((feature, index) => (
  //           <TouchableOpacity
  //             key={index}
  //             style={getButtonStyle(index)} // dynamically select style
  //             onPress={() => handleFeaturePress(feature)}
  //           >
  //             <Image
  //               source={getIcon(feature)} // dynamically select icon
  //               resizeMode='cover'
  //               style={buttonStyles.buttonImage}
  //             />
  //             <Text style={styles.buttonText}>{feature}</Text>
  //           </TouchableOpacity>

  //         ))}
  //       </View>
  //     </View>
  //   );
  // };
  const getButtonStyle = (index) => {
    switch (index) {
      case 0: return styles.buttonL3;
      case 1: return styles.buttonC3; 
      case 2: return styles.buttonR3; 
      default: return styles.buttonL3; 
    }
  };
  const getIcon = (feature) => {
    switch (feature) {
      case "Add Password": return icons.lock;
      case "Remove Password": return icons.openLock;
      case "Add Text": return icons.text;
      case "Rotate Pages": return icons.rotate;
      case "Add Watermark": return icons.watermark;
      case "Add Images": return icons.add;
      case "Images to PDF": return icons.image;
      case "Text to PDF": return icons.text;
      case "QR & Barcodes": return icons.qrcode;
      case "Excel to PDF": return icons.excel;
      case "View Files": return icons.viewFiles;
      case "Merge PDF": return icons.merge;
      case "Split PDF": return icons.split;
      case "Compress PDF": return icons.compress;
      case "Invert PDF": return icons.invertColor;
      case "History": return icons.history;
      case "Remove Duplicates": return icons.removeDuplicate;
      case "Remove Pages": return icons.removePage;
      case "Reorder Pages": return icons.reorder;
      case "Extract Images": return icons.broken;
      case "Extract Text": return icons.text;
      case "PDF to Images": return icons.image;
      case "ZIP to PDF": return icons.zip;
      default: return icons.lock;
    }
  };
  const RecentlyUsedFeatures = () => {
    const router = useRouter();
    const { recentlyUsed, addFeature } = useContext(RecentlyUsedContext);

    if (recentlyUsed.length === 0) {
        return null;
    }

    const handleFeaturePress = (featureName) => {
        console.log(`${featureName} pressed again`);
        addFeature(featureName);
    };

    // Use a single style for all buttons
    const buttonStyle = styles.buttonL3;

    // Determine container justifyContent based on number of features
    const getContainerJustifyContent = () => {
        switch (recentlyUsed.length) {
            case 1:
                return 'flex-start'; // Align single button to the left
            case 2:
                return 'flex-start'; // Align two buttons to the left and center
            case 3:
            default:
                return 'space-between'; // Space out buttons evenly
        }
    };

    return (
        <View>
            <Text style={styles.header}>Recently Used Features</Text>
            <View style={[styles.buttonsContainer, {justifyContent: getContainerJustifyContent()}]}>
                {recentlyUsed.slice(0).reverse().map((feature, index) => (
                    <TouchableOpacity
                        key={index}
                        style={getButtonStyle(index)} // Dynamically select style
                        onPress={() => handleFeaturePress(feature)}
                    >
                        <Image
                            source={getIcon(feature)} // Function to get icons based on feature
                            resizeMode='cover'
                            style={buttonStyles.buttonImage}
                        />
                        <Text style={styles.buttonText}>{feature}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default RecentlyUsedFeatures;