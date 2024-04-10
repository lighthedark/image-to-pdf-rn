import React from 'react';
import { View, Text } from 'react-native';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const CreateNewPDF = ({currentPage=false}) => {

    const subDirectory = "create";
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (
        <View style={{paddingTop: 15}}>
            <Text style={styles.sectionHeader}>Create New PDF</Text>
            <SideBarButton
                isCurrentPage={isCurrentPage("ImageToPDF")}
                pageName={"ImageToPDF"}
                pageText={"Image To PDF"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("TextToPDF")}
                pageName={"TextToPDF"}
                pageText={"Text To PDF"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("QRAndBarcodes")}
                pageName={"QRAndBarcodes"}
                pageText={"QR & Barcodes"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("ExcelToPDF")}
                pageName={"ExcelToPDF"}
                pageText={"Excel To PDF"}
                subDirectory={subDirectory}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default CreateNewPDF
