import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import { Scanner } from '../screen/Scanner';
import { SearchResult } from '../screen/SearchResult';


export function AppRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Scanner" component={Scanner} />
            <Screen name="SearchResult" component={SearchResult} />
        </Navigator>
    )
}