import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Content,
    Header,
    Price,
    ProductImage,
    ProductOrigin,
    Title,
} from './styles';

interface ProductProps {
    title: string;
    price: string;
    origin: string;
    thumbnail: string;
    link: string
}

interface ProductCardProps extends TouchableOpacityProps {
    data: ProductProps
    onPress?: () => void;
}

export function ProductCard({ data, onPress }: ProductCardProps) {
    const {
        price,
        title,
        origin,
        thumbnail,
        link
    } = data

    return (
        <Container onPress={onPress}>
                <ProductImage source={{ uri: thumbnail }} />

                <Content>
                    <Header>
                        <Title>{title}</Title>
                        <ProductOrigin>{origin}</ProductOrigin>

                    </Header>

                    <Price>{price}</Price>
                </Content>
        </Container>
    )
}