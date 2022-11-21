import { useRoute } from '@react-navigation/native';
import React from 'react';

import { Header } from "../../components/Header";
import { ProductCard } from '../../components/ProductCard';

import {
    Container,
    ProductList,
    ProductListFooter,
    SeparatorProduct
} from "./styles";

export function SearchResult(){
    const { params } = useRoute()
    
    const products = params.products

    return (
        <Container>
            <Header title="Resultado" back/>
            <ProductList
                data={products}
                keyExtractor={product => product.product_id}
                renderItem={({ item }) => (
                    <ProductCard data={{
                        origin: item.source,
                        ...item
                    }}
                    />
                )}
                ItemSeparatorComponent={() => <SeparatorProduct />}
                ListFooterComponent={<ProductListFooter />}
            />
        </Container>
    )
}