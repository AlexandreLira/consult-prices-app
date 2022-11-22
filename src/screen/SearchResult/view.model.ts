import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

export function useSearchResult() {

    const [average, setAverage] = useState('R$0,00')
    const [max, setMax] = useState('R$0,00')
    const [min, setMin] = useState('R$0,00')

    const { params } = useRoute()

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

    useEffect(() => {
        calculateThePrices(products)
    }, [])


    return {
        products,
        average,
        min,
        max
    }
}