import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { products } from "../../utils/dumbData";
import { Container, Footer, ProductList, ProductListFooter, SeparatorProduct } from "./styles";

export function Home() {


    return (
        <Container>
            <Header title="Minhas pesquisas" />
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
                ListFooterComponent={<ProductListFooter/>}
            />

            <Footer>
                <Button title="Pesquisar produto" />

            </Footer>
        </Container>
    )
}