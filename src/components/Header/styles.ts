import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
    margin-bottom: 18px;
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.shape}
`;