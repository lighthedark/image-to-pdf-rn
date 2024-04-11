import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const HomeScreen = ({currentPage = null}) => {
    const router = useRouter();
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (
        <View style={{paddingTop: 30}}>
            <SideBarButton
                isCurrentPage={isCurrentPage("HomeScreen")}
                pageName={"HomeScreen"}
                pageText={"Home"}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default HomeScreen