import React from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RFPercentage } from "react-native-responsive-fontsize";

import { Header } from "../../components/Header";
import { BarCodeMask } from "../../components/BarCodeMask";
import { NotFound } from "../../components/NotFound";
import { LoadingCard } from "../../components/LoadingCard";

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
    SearchBarInput,

} from "./styles";

import { useScannerViewControlle } from "./view.controller";



export function Scanner() {

    const {
        onSearchByName,
        onChangeSearchType,
        makeSlideOutTranslation,
        handleBarCodeScanned,
        onChangeText,
        handleTryAgain,
        colors,
        optionToSearch,
        scanned,
        isSearchLoading,
        error,
        isOnBarcodeSearch,
    } = useScannerViewControlle()


    if (error) {
        return (
            <NotFound onPress={handleTryAgain} />
        )
    }


    return (
        <Container>
            <Header title="Pesquisar produto" back />
            {optionToSearch === 'byBarcode' ? (
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
                </Content>
            ) : (
                <SearchByNameContent>
                    <Title>Pesquise pelo nome do produto</Title>

                    <SearchBarContent>
                        <Icon name="search" />
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
            
            {isSearchLoading && <LoadingCard/>}

        </Container>
    )
}

