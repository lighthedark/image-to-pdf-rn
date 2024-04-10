import React from 'react';
import { View, Text} from 'react-native';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const ModifyExistingPDFs = ({currentPage = null}) => {

    const subDirectory = "modify";
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (
        <View style={{paddingTop: 15}}>
            <Text style={styles.sectionHeader}>Modify Existing PDFs</Text>
            <SideBarButton
                isCurrentPage={isCurrentPage("MergePDF")}
                pageName={"MergePDF"}
                pageText={"Merge PDF"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("SplitPDF")}
                pageName={"SplitPDF"}
                pageText={"Split PDF"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("InvertPDF")}
                pageName={"InvertPDF"}
                pageText={"Invert PDF"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("CompressPDF")}
                pageName={"CompressPDF"}
                pageText={"Compress PDF"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("RemoveDuplicate")}
                pageName={"RemoveDuplicate"}
                pageText={"Remove Duplicate"}
                subDirectory={subDirectory}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default ModifyExistingPDFs
