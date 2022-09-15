import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Icon, BackButton, Title } from './styles';

interface HeaderProps {
    title: string;
    back?: boolean
}

export function Header({title, back} : HeaderProps){

    const navigation = useNavigation()
    return (
        <Container>
            <Title>{title}</Title>
            {back && (
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left"/> 
                </BackButton>

            )}
        </Container>
    )
}