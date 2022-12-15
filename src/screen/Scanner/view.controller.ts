import React, { FC, useEffect, useState } from 'react';
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { useSearch } from '../../viewModel/search';
import { BarCodeScanner } from 'expo-barcode-scanner';

export function useScannerViewControlle<FC>() {
    const [scanned, setScanned] = useState(false);
    const [optionToSearch, setOptionToSearch] = useState<'byName' | 'byBarcode'>('byBarcode');
    const [isOnBarcodeSearch, setIsOnBarcodeSearch] = useState(true)
    const [productName, setProductName] = useState('')
    const [isSearchLoading, setIsSearchLoading] = useState(false)
    const [error, setError] = useState(false)
    const [hasPermission, setHasPermission] = useState(null);

    const navigation = useNavigation()
    const { searchProductByName, searchProductByBarcode } = useSearch()
    const { colors } = useTheme()

    const SCREEN_WIDTH = Dimensions.get("window").width;


    async function onSearchByName() {
        setIsSearchLoading(true)
        try {
            const products = await searchProductByName(productName)
            // @ts-ignore
            navigation.navigate('SearchResult', { products })
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setIsSearchLoading(false)
        }
    }


    const handleBarCodeScanned = async ({ type, data }: any) => {
        setScanned(true);
        setIsSearchLoading(true)
        try {    
            const products = await searchProductByBarcode(data)
            // @ts-ignore
            navigation.navigate('SearchResult', { products })

        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setIsSearchLoading(false)
            setScanned(false);

        }


    };


    function handleTryAgain(){
        setError(false)
    }



    function onChangeSearchType() {
        if (optionToSearch === 'byBarcode') {
            setIsOnBarcodeSearch(false)
        } else {
            setIsOnBarcodeSearch(true)
        }
        setOptionToSearch(state => state === 'byName' ? 'byBarcode' : 'byName')
    }

    function onChangeText(text: string) {
        setProductName(text)
    }

    function makeSlideOutTranslation(translationType: string, fromValue: number) {
        return {
            from: {
                [translationType]: SCREEN_WIDTH * -0.18
            },
            to: {
                [translationType]: fromValue
            }
        };
    }

    useEffect(() => {
        async function getBarCodeScannerPermissions() {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
          };
      
          getBarCodeScannerPermissions();
    })



    return {
        onSearchByName,
        onChangeSearchType,
        makeSlideOutTranslation,
        handleBarCodeScanned,
        handleTryAgain,
        scanned,
        colors,
        optionToSearch,
        isSearchLoading,
        error,
        hasPermission,

        onChangeText,

        isOnBarcodeSearch
    };
};