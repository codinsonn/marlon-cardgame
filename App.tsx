import React, { useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import styled from 'styled-components/native';
// Components
import { Card } from './src/componentRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const AppContainer = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #87cffa;
`;

/* --- Load Assets ------------------------------------------------------------------------------ */

const cacheImages = images =>
    images.map(image => {
        return typeof image === 'string' ? Image.prefetch(image) : Asset.fromModule(image).downloadAsync();
    });

/* --- <App/> ------------------------------------------------------------------------------ */

const App = () => {
    // State
    const [isReady, setIsReady] = useState(false);

    // -- componentRegistry() --

    const loadAssetsAsync = useCallback(async () => {
        const imageAssets = cacheImages([require('./assets/Thorr.jpg')]);
        await Promise.all([...imageAssets]);
    }, []);

    // -- Render --

    return isReady ? (
        <AppContainer>
            <Card />
        </AppContainer>
    ) : (
        <AppLoading startAsync={loadAssetsAsync} onFinish={() => setIsReady(true)} onError={console.warn} />
    );
};

/* --- Export App ------------------------------------------------------------------------------ */

export default App;
