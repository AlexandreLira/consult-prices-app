import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

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

export const Footer = styled.View`
    width: 100%;
    position: absolute;
    bottom: ${RFValue(64)}px;
    padding-left: ${RFValue(24)}px;
    padding-right: ${RFValue(24)}px;
`;