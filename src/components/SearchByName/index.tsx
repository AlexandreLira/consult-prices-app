import React from 'react';
import {
    Container,
    Title,
    SearchBarContent,
    SearchBarInput,
    Icon,
} from './styles';

export function SearchByName(){
    return (
        <Container>
            <Title>Pesquise pelo nome do produto</Title>

            <SearchBarContent>
                <Icon name="search"/>
                <SearchBarInput
                    placeholder="Exemplo: Iphone 8 plus"    
                />
            </SearchBarContent>

        </Container>
    ) 
}