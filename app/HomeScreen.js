import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, DEFAULT_STYLE } from '../constants';
import { 
    RecentlyUsed, 
    CreateNewPDF, 
    ViewPDFs,
    EnhanceCreatedPDFs,
    ModifyExistingPDFs,
    MoreOptions
 } from '../components';

import RecentlyUsedProvider from '../components/home/recentlyused/RecentlyUsedProvider';
import RecentlyUsedFeatures from '../components/home/recentlyused/RecentlyUsedFeatures';
import Header from "./header/Header";

const HomeScreen= () => {
    const router = useRouter()

    return (
        <LinearGradient colors={[COLORS.colorPrimary, COLORS.colorAccent]} start={{x: 0, y: 0}} end={{x: 0, y: 0.16}} style={DEFAULT_STYLE}>
            <SafeAreaView style={DEFAULT_STYLE}>   
                <Header
                    title = "PDF Converter"
                    currentPage = "HomeScreen"
                />
                <View style={{overflow: 'scroll', 
                              borderTopLeftRadius: 25,
                              borderTopRightRadius: 25,
                              backgroundColor: COLORS.lighter_gray}}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <RecentlyUsedProvider>
                        <RecentlyUsedFeatures />
                        <View style={{marginBottom: 110, marginTop: 20}}>
                            <CreateNewPDF/>
                            <ViewPDFs/>
                            <EnhanceCreatedPDFs/>
                            <ModifyExistingPDFs/>
                            <MoreOptions/>
                        </View>
                        </RecentlyUsedProvider>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomeScreen;