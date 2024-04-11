import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';

const App = () => {

    // Reset stored SideMenu scrollPosition on app startup
    useEffect(() => {
        const getValueFromStorage = async () => {
            try {
                AsyncStorage.setItem('scrollPosition', '0');
                console.log("Setting scrollPosition to 0 on startup")
            } catch (error) {
                console.log('Error retrieving data from AsyncStorage:', error);
            }
        };
        getValueFromStorage();
    }, []);

    return (
        <HomeScreen/>
    );
};

export default App;