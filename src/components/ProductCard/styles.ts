import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Image } from 'react-native';

export const Container = styled.TouchableOpacity`
    width: 100%;

    flex-direction: row;

    padding: 17px;

    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
`;

export const ProductImage = styled(Image).attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(90)}px;
    height: ${RFValue(90)}px;
    margin-right: ${RFValue(12)}px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const Header = styled.View`
    
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.title};

    margin-bottom: 6px;
`;

export const ProductOrigin = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
`;

export const Price = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.success}
`;
