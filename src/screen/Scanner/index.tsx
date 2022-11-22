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
    SearchBarInput,
    LoadingContent,
    LoadingCard
} from "./styles";

import { useScannerViewModel } from "./view.model";
import { ActivityIndicator } from "react-native";
import { NotFound } from "../../components/NotFound";


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
    } = useScannerViewModel()


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
            

            {isSearchLoading && (
                <LoadingContent>
                    <LoadingCard>
                        <ActivityIndicator size="large" color={colors.primary}/>
                        <Text color={colors.title}>
                            Estou fazendo sua busca...
                        </Text>
                    </LoadingCard>
                </LoadingContent>
            )}
        </Container>
    )
}

