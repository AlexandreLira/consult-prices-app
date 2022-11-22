import { isLoading } from "expo-font";
import React from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { LoadingCard } from "../../components/LoadingCard";
import { ProductCard } from "../../components/ProductCard";

import {
    Container,
    Footer,
    Gradient,
    ProductList,
    ProductListFooter,
    SeparatorProduct
} from "./styles";

import { useHomeController } from "./view.controller";


export function Home({ navigation }: any) {
    const {
        products,
        handleSearch,
        isLoading
    } = useHomeController()

    return (
        <Container>
            <Header title="Minhas pesquisas" />
            <ProductList
                data={products}
                keyExtractor={product => product.product_id}
                renderItem={({ item }) => (
                    <ProductCard
                        data={{
                            origin: item.source,
                            ...item
                        }}
                        onPress={() => handleSearch(item.title)}
                    />
                )}
                ItemSeparatorComponent={() => <SeparatorProduct />}
                ListFooterComponent={<ProductListFooter />}
            />


            <Footer>
                <Button
                    title="Pesquisar produto"
                    onPress={() => navigation.navigate('Scanner')}
                />

            </Footer>
            <Gradient />

            {isLoading && <LoadingCard/>}
        </Container>
    )
}