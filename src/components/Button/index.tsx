import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    IconContainer,
    Text
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            <IconContainer>
                <Icon name="barcode-outline" />
            </IconContainer>

            <Text>
                {title}
            </Text>
        </Container>
    )
}