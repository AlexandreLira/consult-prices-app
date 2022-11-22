import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import * as Animatable from "react-native-animatable";
import {Platform} from 'react-native';
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
    flex: 1;
    background-color: black;
`;

export const Content = styled.View`
    flex: 1;
    position: relative;
`;

export const CardContainer = styled.View`
    z-index: 999;
    width: 100%;
    position: absolute;
    top: ${Platform.OS === 'android' ? RFPercentage(30) : RFPercentage(22)}px;

    justify-content: center;
    align-items: center;
`;

export const Card = styled.View`
    width: 80%;
    height: 60px;

    justify-content: center;
    align-items: center;

    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
`;

interface TextProps {
    color: string;
};

export const Text = styled.Text<TextProps>`
    color: ${({theme, color}) => color ? color : theme.colors.shape};
    text-align: center;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;

export const ScanAnimation = styled(Animatable.View).attrs({
    direction: 'alternate-reverse',
    iterationCount: 'infinite',
    duration: 1700,
    easing: 'linear',
})`
    width: 80%;
    height: 1px;

    background-color: ${({theme}) => theme.colors.primary};

    position: absolute;
    top: 50%;
    left: 10%;
    z-index: 99;
    
`;

export const SwitchOptionContent = styled.View`
    width: 100%;
    position: absolute;
    bottom: ${RFPercentage(10)}px;
    z-index: 999;
    align-items: center;
`;


export const SwithBackground = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.shape};
    width: 80%;
    height: 50px;
    border-radius: 25px;
    margin-top: 15px;
    flex-direction: row;
`;

interface SwithOptionsProps {
    disabled: boolean;
}

export const SwithOption = styled.View<SwithOptionsProps>`
    background-color: ${({theme, disabled}) => disabled ? 'transparent' : theme.colors.primary};
    height: 100%;
    width: 50%;
    border-radius: 100px;
    justify-content: center;
    align-items: center
`


export const SearchByNameContent = styled.View`
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

export const LoadingContent = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,.5);
    justify-content: center;
    align-items: center;
`

export const LoadingCard = styled.View`
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 999;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px

`




