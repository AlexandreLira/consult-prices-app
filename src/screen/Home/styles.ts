import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;
export const Footer = styled.View`
    width: 100%;
    position: absolute;
    bottom: ${RFValue(64)}px;
    padding-left: ${RFValue(24)}px;
    padding-right: ${RFValue(24)}px;
`;