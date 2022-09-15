import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const ProductList = styled(
    FlatList 
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