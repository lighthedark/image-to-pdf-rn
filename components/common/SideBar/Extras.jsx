import React from 'react';
import { View, Text} from 'react-native';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const Extras = ({currentPage=false}) => {

    const subDirectory = "extra";
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (

        <View style={{paddingTop: 15}}>
            <Text style={styles.sectionHeader}>Extras</Text>
            <SideBarButton
                isCurrentPage={isCurrentPage("FAQ")}
                pageName={"FAQ"}
                pageText={"FAQ"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("Settings")}
                pageName={"Settings"}
                pageText={"Settings"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("RateUs")}
                pageName={"RateUs"}
                pageText={"Rate Us"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("Share")}
                pageName={"Share"}
                pageText={"Share"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("Help")}
                pageName={"Help"}
                pageText={"Help"}
                subDirectory={subDirectory}
            />
            <SideBarButton
                isCurrentPage={isCurrentPage("AbouUs")}
                pageName={"AboutUs"}
                pageText={"About Us"}
                subDirectory={subDirectory}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default Extras
