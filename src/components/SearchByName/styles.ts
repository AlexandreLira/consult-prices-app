import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
`

export const Title = styled.Text`
     color: ${({ theme }) => theme.colors.title};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;

export const SearchBarContent = styled.View`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 25px;
    margin-top: 12px;
    flex-direction: row;
    align-items: center;
    padding-left: 14px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const SearchBarInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.colors.text,
    returnKeyType: 'search', 
}))`
    margin-left: 14px;
    width: 80%;
    height: 50px
`