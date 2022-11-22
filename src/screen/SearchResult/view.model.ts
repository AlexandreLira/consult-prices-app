import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSearch } from '../../viewModel/search';

export function useSearchResult() {

    const [average, setAverage] = useState('R$0,00')
    const [max, setMax] = useState('R$0,00')
    const [min, setMin] = useState('R$0,00')

    const { params } = useRoute()
    const { saveProductOnStorage } = useSearch()

    const products = params.products

    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    function calculateThePrices(products) {

        const average = products.reduce((acc, curr) => {
            acc += curr.extracted_price
            return acc
        }, 0) / products.length

        const extracted_prices = products.map(item => item.extracted_price)
        const max = Math.max(...extracted_prices)
        const min = Math.min(...extracted_prices)

        setAverage(currencyFormat(average))
        setMax(currencyFormat(max))
        setMin(currencyFormat(min))

    }

    function handleGoSite(link: string) {
        Linking.openURL(link)
    }

    useEffect(() => {
        (async () => {
            calculateThePrices(products)
            await saveProductOnStorage(products[0])
        })()
    }, [])


    return {
        products,
        handleGoSite,
        average,
        min,
        max
    }
}