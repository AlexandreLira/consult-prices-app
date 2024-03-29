import { CUSTOM_SEARCH_KEY_API } from '@env';


export async function googleSearchApi(name: string){
    const searchOptions = {
        key: CUSTOM_SEARCH_KEY_API,
        searchType: 'image',
        q: name,
        num: 1,
        cx: 'feefbd23e66fb44d1'
    }
    const url = encodeURI([
        'https://customsearch.googleapis.com/customsearch/v1',
        `?key=${searchOptions.key}`,
        // `&searchType=${searchOptions.searchType}`,
        `&q=${searchOptions.q}`,
        `&cx=${searchOptions.cx}`,
        `&num=${searchOptions.num}`
    ].join(''))

    const response = await fetch(url)
    const data = await response.json()
    if(data.searchInformation.totalResults === '0') {
        throw new Error()
    }

    if(data.error){
        throw new Error(data.error)
    }
    const title = formattedTitle(data.items[0].title, name)
    return title
}


function formattedTitle(title: string, barcode: string){
    let titleFormatted = title
    if(titleFormatted.includes(barcode)){
        titleFormatted = titleFormatted.replace(barcode, '')
    }

    if(titleFormatted.includes('-')) {
        titleFormatted = titleFormatted.replace(/-/g, '')
    }

    if(titleFormatted.includes('GTIN/EAN/UPC')) {
        titleFormatted = titleFormatted.replace('GTIN/EAN/UPC', '')
    }
    if(titleFormatted.includes('.')) {
        titleFormatted = titleFormatted.replace(/\./g, '')
    }

    return titleFormatted

}   