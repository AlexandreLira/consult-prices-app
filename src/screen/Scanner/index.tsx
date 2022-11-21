import React from "react";
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
    SwitchOptionContent,
    SwithBackground,
    SwithOption,
    Text,

    SearchByNameContent,
    Title,
    SearchBarContent,
    Icon,
    SearchBarInput
} from "./styles";

import { useScannerViewModel } from "./view.model";
import { ActivityIndicator } from "react-native";


export function Scanner() {

    const {
        onSearchByName,
        onChangeSearchType,
        makeSlideOutTranslation,
        handleBarCodeScanned,
        colors,
        optionToSearch,
        scanned,
        isSearchLoading,
        onChangeText,

        isOnBarcodeSearch,
    } = useScannerViewModel()


    return (
        <Container>
            <Header title="Pesquisar produto" back />
            {optionToSearch === 'byBarcode' ? (
                <Content>
                    {!isSearchLoading ? (
                        <>
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
                        </>
                    ) : <ActivityIndicator />}



                </Content>
            ) : (
                <SearchByNameContent>
                    <Title>Pesquise pelo nome do produto</Title>

                    <SearchBarContent>
                        {isSearchLoading ? <ActivityIndicator /> : <Icon name="search" />}
                        <SearchBarInput
                            placeholder="Exemplo: Iphone 8 plus"
                            onChangeText={onChangeText}
                            onSubmitEditing={onSearchByName}
                        />
                    </SearchBarContent>

                </SearchByNameContent>
            )}

            <SwitchOptionContent>
                <Text color={isOnBarcodeSearch ? colors.shape : colors.title}>
                    Pesquisar produto por:
                </Text>
                <SwithBackground onPress={onChangeSearchType}>
                    <SwithOption disabled={!isOnBarcodeSearch}>
                        <Text color={isOnBarcodeSearch ? colors.shape : colors.title}>
                            Código de barras
                        </Text>
                    </SwithOption>
                    <SwithOption disabled={isOnBarcodeSearch}>
                        <Text color={!isOnBarcodeSearch ? colors.shape : colors.title}>
                            Nome
                        </Text>
                    </SwithOption>
                </SwithBackground>
            </SwitchOptionContent>

        </Container>
    )
}

