import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import * as Animatable from "react-native-animatable";

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
    top: ${RFPercentage(62)}px;

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

export const Text = styled.Text`
    color: rgba(255,255,255,0.8);
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

