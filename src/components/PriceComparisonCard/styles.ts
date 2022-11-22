import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    width: 100%;
    margin-bottom: 16px;
    align-self: center;
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 12px 16px;
    border-radius: 5px;
`;

export const Content = styled.View`
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-bottom: 8px;
`;

export const Text = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Price = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const BarContent = styled.View`
    margin: 14px 0px;
    position: relative;
    justify-content: center;
    align-items: center;
`
export const BackgroundLine = styled.View`
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.text_light};
    border-radius: 5px;
`
export const Bar = styled.View`
    position: absolute;
    width: 60%;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
`
export const Circle = styled.View`
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.shape};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
`