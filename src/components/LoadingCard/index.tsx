import React from 'react';
import {
    Container,
    Card,
    Text,
    Loading
} from './styles';

export function LoadingCard() {

    return (
        <Container>
            <Card>
                <Loading/>
                <Text>
                    Estou fazendo sua busca
                    aguarde...
                </Text>
            </Card>
        </Container>
    )
}