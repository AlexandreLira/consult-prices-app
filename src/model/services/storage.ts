import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERPAPI_STORAGE_KEY } from '../../utils/constants';
import { getCurrentSerpApiKey } from './firebase';


export async function getSerpApiKeyFromStorage(){
    const response = await AsyncStorage.getItem(SERPAPI_STORAGE_KEY)

    if(Boolean(response)) {
        return response
    }

    const key = await getCurrentSerpApiKey()
    return key
}

export async function setSerpApiKeyToStorage(key: string){
    await AsyncStorage.setItem(SERPAPI_STORAGE_KEY, key)
}
