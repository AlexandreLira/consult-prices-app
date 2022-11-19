import React, { useState } from "react";
import { Dimensions, Switch } from "react-native";
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
    SwitchOptionContent,
    SwithBackground,
    SwithOption,
    Text
} from "./styles";
import { products } from "../../utils/dumbData";
import { useTheme } from "styled-components";

const SCREEN_WIDTH = Dimensions.get("window").width;

export function Scanner() {
    const [scanned, setScanned] = useState(false);
    const [optionToSearch, setOptionToSearch] = useState<'byName' | 'byBarcode'>('byBarcode');
    const navigation = useNavigation()
    const theme = useTheme()

    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        // @ts-ignore
        navigation.navigate('SearchResult', { products: products[0] })
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
                <CardContainer>
                    <Card>
                        <Text>Escaneie o código de barras do produto</Text>
                    </Card>
                </CardContainer>
                <BarCodeMask />

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

                <SwitchOptionContent>
                    <Text>Pesquisar produto por:</Text>
                    <SwithBackground onPress={() => setOptionToSearch(state => state === 'byName' ? 'byBarcode' : 'byName')}>
                        <SwithOption disabled={Boolean(optionToSearch !== 'byBarcode')}>
                            <Text
                                color={optionToSearch === 'byBarcode' ?
                                    theme.colors.shape :
                                    theme.colors.title
                                }
                            >Código de barras</Text>
                        </SwithOption>
                        <SwithOption disabled={Boolean(optionToSearch !== 'byName')}>
                            <Text
                                color={optionToSearch === 'byName' ?
                                    theme.colors.shape :
                                    theme.colors.title
                                }>Nome</Text>
                        </SwithOption>
                    </SwithBackground>
                </SwitchOptionContent>

            </Content>
        </Container>
    )
}

