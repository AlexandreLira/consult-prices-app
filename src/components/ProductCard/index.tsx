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
    thumbnail: string
}

interface ProductCardProps extends TouchableOpacityProps{
    data: ProductProps
}

export function ProductCard({data}: ProductCardProps){
    const {
        price,
        title,
        origin,
        thumbnail,
    } = data

    return (
        <Container>
          <ProductImage source={{ uri: thumbnail}}/>

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