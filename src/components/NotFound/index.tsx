import React from 'react';
import {
    Container,
    Button,
    ButtonTitle,
    Title,
    SubTitle,
    Image,
    Content
} from './styles';

import noData from '../../assets/noData.png';


interface NotFoundProps {
    onPress?: () => void
}

export function NotFound({ onPress }: NotFoundProps ){
    return (
        <Container>
            <Content>
                <Image source={noData}></Image>
                <Title>Produto não encontrado</Title>
                <SubTitle>Não conseguimos encontrar o produto que você está buscando.</SubTitle>
                <SubTitle>Tente novamente  ou busque outro produto</SubTitle>
            </Content>
            <Button onPress={onPress}>
                <ButtonTitle>Tentar novamente</ButtonTitle>
            </Button>
        </Container>
    )
}