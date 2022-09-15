import React, { useState } from "react";
import { Dimensions } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RFPercentage } from "react-native-responsive-fontsize";

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

const SCREEN_WIDTH = Dimensions.get("window").width;

export function Scanner() {
    const [scanned, setScanned] = useState(false);

    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        setScanned(false);
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

