import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import {ActivityIndicator} from 'react-native'
export const Container = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,.5);
    justify-content: center;
    align-items: center;
`

export const Card = styled.View`
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 999;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.title};
    text-align: center;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;

export const Loading = styled(ActivityIndicator).attrs(({theme}) => ({
    color: theme.colors.primary,
    size: 'large'
}))`
`;
