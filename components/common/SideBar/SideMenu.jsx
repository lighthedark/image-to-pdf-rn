import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, icons } from "../../../constants"
import styles from "./sidemenu.style";
import CreateNewPDF from './CreateNewPDF';
import ViewPDFs from './ViewPDFs';
import EnhanceCreatedPDFs from './EnhanceCreatedPDFs';
import ModifyExistingPDFs from './ModifyExistingPDFs';
import MoreOptions from './MoreOptions';
import Extras from './Extras';
import HomeScreen from './HomeScreen';
import _ from 'lodash';


const SideMenu = ({ isVisible, onClose, currentPage }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollViewRef = useRef(null);
    const prevIsVisible = useRef(isVisible);

    useEffect(() => {

        const saveScrollPosition = async (scrollPosition) => {
            try {
                await AsyncStorage.setItem('scrollPosition', scrollPosition);
                console.log("Storing scrollPosition", scrollPosition ,"from AsyncStorage");
            } catch (error) {
                console.error('Error saving scroll position to AsyncStorage:', error);
            }
        };

        // Save scrollPosition when SideMenu is closed(prevIsVisible == True && isVisible == False)
        if (prevIsVisible.current && !isVisible) {
            console.log("isVisible:", isVisible); // Log the state of isVisible
            console.log("prevIsVisible:", prevIsVisible.current); // Log the previous state of isVisible
            saveScrollPosition(scrollPosition.toString());
        }

        prevIsVisible.current = isVisible;
    }, [isVisible, scrollPosition]);

    useEffect(() => {
        // Read scrollPosition when SideMenu is open
        if (isVisible) {
            const retrieveScrollPosition = async () => {
                try {
                    const storedPosition = await AsyncStorage.getItem('scrollPosition');
                    if (storedPosition !== null) {
                        const y = parseFloat(storedPosition);
                        setScrollPosition(y);
                        scrollViewRef.current.scrollTo({ y: y, animated: false });
                        console.log("Reading scrollPosition", y ,"from AsyncStorage");
                    }
                } catch (error) {
                    console.error('Error retrieving scroll position from AsyncStorage:', error);
                }
            };

            console.log("isVisible:", isVisible); // Log the state of isVisible
            console.log("prevIsVisible:", prevIsVisible.current); // Log the previous state of isVisible
            retrieveScrollPosition();
        }
    }, [isVisible]);

    const handleScroll = (event) => {
        const y = event.nativeEvent.contentOffset.y;
        updateScrollPosition(y);
    };

    const updateScrollPosition = async (y) => {
        try {
            setScrollPosition(y);
            console.log("Updating local scrollPosition to", y);
        } catch (error) {
            console.error('Error saving scroll position to AsyncStorage:', error);
        }
    };

    if (!isVisible) return null;

    return (
        <SafeAreaView style={styles.menu}>
            <ScrollView 
                ref={scrollViewRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerSection}>
                    <Image
                        source={icons.logoRound}
                        style={styles.headerImage}
                    />
                    <Text style={styles.headerText}>PDF Converter</Text>
                </View>
                <HomeScreen currentPage={currentPage}/>
                <CreateNewPDF currentPage={currentPage}/>
                <ViewPDFs currentPage={currentPage}/>
                <EnhanceCreatedPDFs currentPage={currentPage}/>
                <ModifyExistingPDFs currentPage={currentPage}/>
                <MoreOptions currentPage={currentPage}/>
                <Extras currentPage={currentPage}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SideMenu;