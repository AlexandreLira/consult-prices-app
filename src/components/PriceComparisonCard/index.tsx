import React from 'react';
import {
    Container,
    Title,
    Text,
    Content,
    TextContent,
    Price,
    BarContent,
    BackgroundLine,
    Bar,
    Circle
} from './styles';

interface PriceComparisonCardProps {
    prices: {
        min: string;
        average: string;
        max: string;
    }
}

export function PriceComparisonCard({prices}: PriceComparisonCardProps) {

    return (
        <Container>
            <Title>Preços comuns na Web</Title>
            <Content>
                <TextContent>
                    <Text>Baixo</Text>
                    <Text>Médio</Text>
                    <Text>   Alto</Text>
                </TextContent>

                <BarContent>
                    <BackgroundLine/>
                    <Bar/>
                    <Circle/>
                </BarContent>

                <TextContent>
                    <Price>{prices.min}</Price>
                    <Price>{prices.average}</Price>
                    <Price>{prices.max}</Price>
                </TextContent>

            </Content>
        </Container>
    )
}