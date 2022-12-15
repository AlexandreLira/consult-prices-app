import React from 'react';

import { Header } from "../../components/Header";
import { PriceComparisonCard } from '../../components/PriceComparisonCard';
import { ProductCard } from '../../components/ProductCard';

import {
    Container,
    ProductList,
    ProductListFooter,
    SeparatorProduct
} from "./styles";

import { useSearchResult } from './view.model';

export function SearchResult() {

    const {
        products,
        average,
        min,
        max,
        handleGoSite
    } = useSearchResult()

    return (
        <Container>
            <Header title="Resultado" back />
            <ProductList
                data={products}
                keyExtractor={product => product.product_id}
                renderItem={({ item }) => (
                    <ProductCard
                        data={{
                            origin: item.source,
                            ...item
                        }}

                        onPress={() => handleGoSite(item.link)}
                    />
                )}
                ListHeaderComponent={
                    <PriceComparisonCard prices={{ average, max, min }} />
                }
                ItemSeparatorComponent={() => <SeparatorProduct />}
                ListFooterComponent={<ProductListFooter />}
            />
        </Container>
    )
}