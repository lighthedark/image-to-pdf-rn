import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './sidemenu.style';
import SideBarButton from './SideBarButton';

const Home = ({currentPage = null}) => {
    const router = useRouter();
    const isCurrentPage = (pageName) => currentPage === pageName;

    return (
        <View style={{paddingTop: 30}}>
            <SideBarButton
                isCurrentPage={isCurrentPage("Home")}
                pageName={"Home"}
                pageText={"Home"}
            />
            <View style={styles.line}></View>
        </View>
    )
}

export default Home