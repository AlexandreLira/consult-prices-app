import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from "expo-linear-gradient";


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

interface DataListProps {
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

export const ProductList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps> 
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: RFValue(24),
    }
})`

`;

export const ProductListFooter = styled.View`
    height: ${RFPercentage(20)}px;
`;

export const SeparatorProduct = styled.View`
    height: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    z-index: 99;
    position: absolute;
    bottom: ${RFValue(64)}px;
    padding-left: ${RFValue(24)}px;
    padding-right: ${RFValue(24)}px;
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['transparent', 'rgba(255,255,255, 1)']
})`
    width: 100%;
    height: ${RFPercentage(20)}px;
    position: absolute;
    bottom: 0;
`;