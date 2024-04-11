import React from 'react';
import { View, Text} from 'react-native';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const ViewPDFs = ({currentPage = null}) => {

    const subDirectory = "view";
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (

        <View style={{paddingTop: 15}}>
            <Text style={styles.sectionHeader}>View PDFs</Text>
            <SideBarButton
                isCurrentPage={isCurrentPage("ViewFiles")}
                pageName={"ViewFiles"}
                pageText={"View Files"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("History")}
                pageName={"History"}
                pageText={"History"}
                subDirectory={subDirectory}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default ViewPDFs
