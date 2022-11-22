import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useSearch } from '../../viewModel/search';

export function useHomeController() {
    const [products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const { getProductOnStorage, searchProductByName } = useSearch()
    const navigation = useNavigation()
  

    async function handleSearch(name: string) {
        setIsLoading(true)
        try {
            const products = await searchProductByName(name)
            // @ts-ignore
            navigation.navigate('SearchResult', { products })
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', async () => {
            const response = await getProductOnStorage()
            setProducts(response.reverse())
        });
        return unsubscribe;


    }, [navigation])

    return {
        products,
        handleSearch,
        isLoading
    }
}