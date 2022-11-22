import styled from 'styled-components/native';
import {FlatList, FlatListProps} from 'react-native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

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