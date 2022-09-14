import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: 100%;

    align-items: center;
    flex-direction: row;

    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px;
`;

export const IconContainer = styled.View`
    justify-content: center;
    align-items: center;

    padding: ${RFValue(16)}px;
    border-color:  ${({theme}) => theme.colors.text_light};
    border-right-width: 1px;
;
`;

export const Icon = styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.shape};

`;

export const Text = styled.Text`
    flex: 1;

    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};

    text-align: center;
`;