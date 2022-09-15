import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'
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
    color: ${({theme}) => theme.colors.shape};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: ${RFValue(24)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(18)}px;
    margin-bottom:  ${RFValue(20)}px;
    font-size: ${RFValue(24)}px;

    color: ${({theme}) => theme.colors.shape};
`;