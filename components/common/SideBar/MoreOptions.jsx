import React from 'react';
import { View, Text} from 'react-native';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const MoreOptions = ({currentPage = null}) => {

    const subDirectory = "options";
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (
        <View style={{paddingTop: 15}}>
            <Text style={styles.sectionHeader}>More Options</Text>
            <SideBarButton
                isCurrentPage={isCurrentPage("RemovePages")}
                pageName={"RemovePages"}
                pageText={"Remove Pages"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("ReorderPages")}
                pageName={"ReorderPages"}
                pageText={"Reorder Pages"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("ExtractImages")}
                pageName={"ExtractImages"}
                pageText={"Extract Images"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("PDFToImages")}
                pageName={"PDFToImages"}
                pageText={"PDF to Images"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("ZIPToPDF")}
                pageName={"ZIPToPDF"}
                pageText={"ZIP to PDF"}
                subDirectory={subDirectory}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default MoreOptions
