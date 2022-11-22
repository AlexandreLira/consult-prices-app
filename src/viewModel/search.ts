import React from 'react';
import { googleShoppingSearchByName } from '../model/services/googleShoppingSearch';
import { googleSearchApi } from '../model/services/googleSearchApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { products } from '../utils/dumbData';


interface ProductProps {
    title: string;
    link: string;
    product_link: string;
    product_id: string;
    serpapi_product_api: string;
    source: string;
    price: string;
    extracted_price: number,
    thumbnail: string;
    delivery: string;
}

export function useSearch() {
    const searchedProductHistory = '@consultarprecos:searchedProductHistory'

    async function saveProductOnStorage(product: ProductProps) {
        const products = await getProductOnStorage()
        const hasProduct = hasProductOnTheList(products, product.product_id)

        if(hasProduct) return

        const stringify = JSON.stringify([...products, product])
        await AsyncStorage.setItem(searchedProductHistory, stringify)
    }

    function hasProductOnTheList(productList: ProductProps[], productId: string){
        return productList.some(product => product.product_id === productId)
    }

    async function getProductOnStorage(){
        const response = await AsyncStorage.getItem(searchedProductHistory)

        if(Boolean(response)){
            const products = JSON.parse(response || '[]')
            return products
        }

        return products
    }

    async function searchProductByName(name: string){
        if(name === '') {
            throw new Error()
        }
        const response = await googleShoppingSearchByName(name)
        return response
    }

    async function searchProductByBarcode(barcode: string){
        try {
            const productName = await googleSearchApi(barcode)
            const response = await googleShoppingSearchByName(productName)
            return response
        } catch {
            throw new Error()
        }
    }

    return {
        searchProductByName,
        searchProductByBarcode,
        saveProductOnStorage,
        getProductOnStorage
    }
}