import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, icons } from "../../../constants"
import styles from "./sidemenu.style";
import CreateNewPDF from './CreateNewPDF';
import ViewPDFs from './ViewPDFs';
import EnhanceCreatedPDFs from './EnhanceCreatedPDFs';
import ModifyExistingPDFs from './ModifyExistingPDFs';
import MoreOptions from './MoreOptions';
import Extras from './Extras';
import Home from './Home';
import _ from 'lodash';

const SideMenu = ({ isVisible, onClose, currentPage }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollViewRef = useRef(null);
    const wasVisibleRef = useRef(isVisible); // Track the previous visibility state

    // Debounced function to update the scroll position, reducing rapid state updates
    const updateScrollPosition = useCallback(_.debounce((y) => {
        setScrollPosition(y);
    }, 100), []); // Adjust debounce time as needed

    const handleScroll = (event) => {
        updateScrollPosition(event.nativeEvent.contentOffset.y);
    };

    useEffect(() => {
        if (isVisible && scrollViewRef.current) {
            // Only scroll to the saved position if the menu was previously closed
            if (!wasVisibleRef.current) {
                scrollViewRef.current.scrollTo({ y: scrollPosition, animated: false });
            }
        }
        // Update the wasVisibleRef after handling
        wasVisibleRef.current = isVisible;
    }, [isVisible, scrollPosition]);

    if (!isVisible) return null;

    return (
        <SafeAreaView style={styles.menu}>
            <ScrollView 
                ref={scrollViewRef}
                onScroll={handleScroll}
                scrollEventThrottle={16} // Adjust based on your needs for performance
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerSection}>
                    <Image
                        source={icons.logoRound}
                        style={styles.headerImage}
                    />
                    <Text style={styles.headerText}>PDF Converter</Text>
                </View>
                <Home currentPage={currentPage}/>
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