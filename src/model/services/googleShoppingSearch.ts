// development
// const API_KEY = "9bff635b2826eb1df6f92f9d2e99676c85c8566023775aaeba9db7024671a32c";
//Production 
const API_KEY = "de79fb21feead5b8e7d3e80772c6fdadd06c4ea526ac9d70fbb6da6a23b0a0ed";


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
    const searchOptions = {
        api_key: API_KEY,
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
        `api_key=${API_KEY}`].join('')


    const response = await fetchAPI(encodeURI(url))
    const data: googleSearchResultProps = await response.json()
    if(data.error){
        throw new Error(data.error)
    }
    
    return data.shopping_results.filter(item => !item.price.includes('mês'))




}

