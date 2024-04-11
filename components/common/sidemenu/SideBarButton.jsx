import React, { useContext } from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './sidemenu.style';
import { COLORS, icons } from '../../../constants';
import buttonDebounce from "../button/Debounce";
import RecentlyUsedContext from '../../home/recentlyused/RecentlyUsedContext';
import { useRouter } from 'expo-router';

const SideBarButton = ({isCurrentPage, pageName, pageText, subDirectory}) => {

    const iconTranslation = {
        "HomeScreen": icons.home,

        "ImageToPDF": icons.image,
        "TextToPDF": icons.text,
        "QRAndBarcodes": icons.qrcode,
        "ExcelToPDF": icons.excel,

        "ViewFiles": icons.viewFiles,
        "History": icons.history,

        "AddPassword": icons.lock,
        "RemovePassword": icons.openLock,
        "AddText": icons.text,
        "RotatePages": icons.rotate,
        "AddWatermark": icons.watermark,
        "AddImages": icons.add,

        "MergePDF": icons.merge,
        "SplitPDF": icons.split,
        "InvertPDF": icons.invertColor,
        "CompressPDF": icons.compress,
        "RemoveDuplicate": icons.removeDuplicate,

        "RemovePages": icons.removePage,
        "ReorderPages": icons.reorder,
        "ExtractImages": icons.broken,
        "PDFToImages": icons.image,
        "ExtractText": icons.text,
        "ZIPToPDF": icons.zip,

        "FAQ": icons.faq,
        "Settings": icons.settings,
        "RateUs": icons.star,
        "Share": icons.share,
        "Help": icons.questionMark,
        "AboutUs": icons.exclamationMark
    };

    const { addFeature } = useContext(RecentlyUsedContext);
    const router = useRouter();

    const [handleButtonPress, disabled] = buttonDebounce((pageName, pageText, subDirectory) => {
        console.log(`Button ${pageText} pressed`);

        if (pageName === "HomeScreen"){
            router.push('/HomeScreen');
        }
        else if(pageName != "RateUs" && pageName != "Share"){
            addFeature(pageText);
            router.push(`/${subDirectory}/${pageName}`);
        }
    });

  return (
    <>
        <TouchableHighlight 
            style={styles.button(isCurrentPage)} 
            onPress={() => handleButtonPress(pageName, pageText, subDirectory)}
            disabled={disabled} 
            underlayColor={COLORS.colorLightGrey}
        >
            <View style={styles.buttonCurrentPage(isCurrentPage)}>
                <Image
                    source={iconTranslation[pageName]}
                    style={styles.buttonImage(isCurrentPage)}
                    resizeMode='cover'
                />
                <Text style={styles.buttonText(isCurrentPage)}>{pageText}</Text>
            </View>
        </TouchableHighlight>
    </>
  )
}

export default SideBarButton
