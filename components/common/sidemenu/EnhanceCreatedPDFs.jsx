import React from 'react';
import { View, Text } from 'react-native';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const EnhanceCreatedPDFs = ({currentPage=false}) => {

    const subDirectory = "enhance"
    const isCurrentPage = (pageName) => currentPage === pageName;

  return (
    <View style={{paddingTop: 15}}>
        <Text style={styles.sectionHeader}>Enhance Created PDFs</Text>
        <SideBarButton
            isCurrentPage={isCurrentPage("AddPassword")}
            pageName={"AddPassword"}
            pageText={"Add Password"}
            subDirectory={subDirectory}
        />
        <SideBarButton
            isCurrentPage={isCurrentPage("RemovePassword")}
            pageName={"RemovePassword"}
            pageText={"Remove Password"}
            subDirectory={subDirectory}
        />
        <SideBarButton
            isCurrentPage={isCurrentPage("AddText")}
            pageName={"AddText"}
            pageText={"Add Text"}
            subDirectory={subDirectory}
        />
        <SideBarButton
            isCurrentPage={isCurrentPage("RotatePages")}
            pageName={"RotatePages"}
            pageText={"Rotate Pages"}
            subDirectory={subDirectory}
        />
        <SideBarButton
            isCurrentPage={isCurrentPage("AddWatermark")}
            pageName={"AddWatermark"}
            pageText={"Add Watermark"}
            subDirectory={subDirectory}
        />
        <SideBarButton
            isCurrentPage={isCurrentPage("AddImages")}
            pageName={"AddImages"}
            pageText={"Add Images"}
            subDirectory={subDirectory}
        />
        <View style={styles.line}></View>
    </View>
  )
}

export default EnhanceCreatedPDFs