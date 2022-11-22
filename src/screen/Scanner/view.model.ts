import React, { FC, useState } from 'react';
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { useSearch } from '../../viewModel/search';

export function useScannerViewModel<FC>() {
    const [scanned, setScanned] = useState(false);
    const [optionToSearch, setOptionToSearch] = useState<'byName' | 'byBarcode'>('byBarcode');
    const [isOnBarcodeSearch, setIsOnBarcodeSearch] = useState(true)
    const [productName, setProductName] = useState('')
    const [isSearchLoading, setIsSearchLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigation = useNavigation()
    const { googleShoppingSearchByName, googleSearchApi } = useSearch()
    const { colors } = useTheme()

    const SCREEN_WIDTH = Dimensions.get("window").width;


    async function onSearchByName() {
        setIsSearchLoading(true)
        try {
            const products = await googleShoppingSearchByName(productName)
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
            // @ts-ignore
            const productName = await googleSearchApi(data)
            const products = await googleShoppingSearchByName(productName)
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

        onChangeText,

        isOnBarcodeSearch
    };
};