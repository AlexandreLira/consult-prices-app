import firestore from '@react-native-firebase/firestore';
import { setSerpApiKeyToStorage } from './storage';

export async function getCurrentSerpApiKey() {
    const serpapiDoc = await firestore()
        .collection('config')
        .doc('serpapi')
        .get();

    const data = serpapiDoc.data()!
    const { currentKey } = data

    await setSerpApiKeyToStorage(currentKey)

    return currentKey
}

export async function setSerpApiError() {
    const todayDate = new Date()
    await firestore()
        .collection('config')
        .doc('serpapi')
        .update({
            lastErroDate: todayDate,
        })
}