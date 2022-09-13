import React from 'react';

import {
    Container,
    Icon,
    IconContainer,
    Text
} from './styles';

interface ButtonProps {
    title: string
}

export function Button({title}: ButtonProps){
    return (
        <Container>
            <IconContainer>
                <Icon name="barcode-outline"/>
            </IconContainer>

            <Text>
                {title}
            </Text>
        </Container>
    )
}