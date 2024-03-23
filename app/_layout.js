import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
//import { logger } from "react-native-logs";

//SplashScreen.preventAutoHideAsync();
//const log = logger.createLogger();

const Layout = () => {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" />
        </Stack>
    )
}

export default Layout;