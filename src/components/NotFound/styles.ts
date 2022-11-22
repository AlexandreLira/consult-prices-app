import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;
    justify-content: flex-end;
    padding: 50px;
`

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
    margin-top: 50px;
    margin-bottom: 10px;
`

export const SubTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin: 6px;
`

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFValue(50)}px;
    width: ${RFValue(232)}px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const Image = styled.Image`
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`; 