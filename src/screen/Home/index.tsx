import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Footer } from "./styles";

export function Home(){
    return (
        <Container>
            <Header title="Minhas pesquisas"/>


            <Footer>
                <Button title="Pesquisar produto"/>

            </Footer>
        </Container>
    )
}