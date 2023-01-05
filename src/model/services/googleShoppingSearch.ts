import firestore from '@react-native-firebase/firestore';
import { getCurrentSerpApiKey, setSerpApiError } from './firebase';
import { getSerpApiKeyFromStorage } from './storage';

interface googleSearchResultProps {
    shopping_results: {
        position: number;
        title: string;
        link: string;
        product_link: string;
        product_id: string;
        source: string;
        price: string;
        extracted_price: string;
        thumbnail: string;
        delivery?: string
    }[],
    error?: string;

}

export async function fetchAPI(url: string) {
    const response = await fetch(url)
    return response
}

export async function googleShoppingSearchByName(productName: string) {
    const serpApiKey = await getSerpApiKeyFromStorage()
    
    const searchOptions = {
        api_key: serpApiKey,
        device: "desktop",
        engine: "google",
        q: productName,
        location: "Brazil",
        google_domain: "google.com.br",
        gl: "br",
        hl: "pt-br",
        tbm: "shop",
        nfpr: "1",
    }

    const url = [
        'https://serpapi.com/search.json?',
        `engine=${searchOptions.engine}&`,
        `q=${searchOptions.q}&`,
        `location=${searchOptions.location}&`,
        `google_domain=${searchOptions.google_domain}&`,
        `gl=${searchOptions.gl}&`,
        `hl=${searchOptions.hl}&`,
        `tbm=${searchOptions.tbm}&`,
        `device=${searchOptions.device}&`,
        `nfpr=${searchOptions.nfpr}&`,
        `api_key=${searchOptions.api_key}`].join('')


    const response = await fetchAPI(encodeURI(url))
    const data: googleSearchResultProps = await response.json()
    
    if(data.error){
        await getCurrentSerpApiKey()
        await setSerpApiError()
        throw new Error(data.error)
    }
    
    return data.shopping_results.filter(item => !item.price.includes('mês'))


}

async function getApiKey(){

    const userDocument = await firestore().collection('config').doc('serpapi').get();
    const data = userDocument.data()!

    return data.currentKey
}

