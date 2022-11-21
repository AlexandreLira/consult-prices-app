import React from 'react';
import { googleShoppingSearchByName } from '../model/services/googleShoppingSearch';
import { googleSearchApi } from '../model/services/googleSearchApi';

export function useSearch(){

    return {
        googleShoppingSearchByName,
        googleSearchApi,
    }
}