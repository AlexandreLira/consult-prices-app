import React, { useState } from "react";
import { Dimensions } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { BarCodeMask } from "../../components/BarCodeMask";

import {
    Card,
    CardContainer,
    Container,
    Content,
    ScanAnimation,
    Text
} from "./styles";
import { products } from "../../utils/dumbData";

const SCREEN_WIDTH = Dimensions.get("window").width;

export function Scanner() {
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation()

    
    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        
        navigation.navigate('SearchResult', {products: products[0]})
        // setScanned(false);
    };


    function makeSlideOutTranslation(translationType: string, fromValue: number) {
        return {
            from: {
                [translationType]: SCREEN_WIDTH * -0.18
            },
            to: {
                [translationType]: fromValue
            }
        };
    }

    return (
        <Container>
            <Header title="Pesquisar produto" back />
            <Content>
                <BarCodeMask />
                <CardContainer>
                    <Card>
                        <Text>Escaneie o código de barras do produto</Text>
                    </Card>
                </CardContainer>

                <ScanAnimation
                    animation={makeSlideOutTranslation(
                        "translateY",
                        RFPercentage(10)
                    )}
                />

                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ flex: 1 }}
                />
            </Content>
        </Container>
    )
}

