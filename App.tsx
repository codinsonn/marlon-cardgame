import React, { useState, useCallback, useMemo } from 'react';
import { View, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import styled from 'styled-components/native';
// Components
import leagues from './src/leagueRegistry';

/* --- Types ------------------------------------------------------------------------------ */

type CardImagesType = { [person: string]: any };

/* --- Images ------------------------------------------------------------------------------ */

let cardImages: CardImagesType = {};
Object.values(leagues).forEach(({ images }) => {
    cardImages = { ...cardImages, ...images };
});

/* --- Styles ------------------------------------------------------------------------------ */

const AppContainer = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #87cffa;
`;

/* --- <App/> ------------------------------------------------------------------------------ */

const App = () => {
    // State
    const [league, setLeague] = useState('marlon');
    const [isReady, setIsReady] = useState(false);
    const [loadedCards, setLoadedCards] = useState([]);

    // -- Assets --

    const cacheImages = useCallback(images => {
        return Object.entries(images).map(([person, img]) => {
            // @ts-ignore
            const image = typeof img === 'string' ? Image.prefetch(img) : Asset.fromModule(img).downloadAsync();
            setLoadedCards(loaded => [...loaded, person]);
            return img;
        });
    }, []);

    const loadAssetsAsync = useCallback(async () => {
        const imageAssets = cacheImages(cardImages);
        await Promise.all([...imageAssets]);
    }, []);

    // -- Build Decks --

    //const fullDeck = useMemo(() => {
    //
    //}, [loadedCards]);

    // -- Render --

    console.log({ loadedCards });

    const { GameScreen, PlayableCard, InspectableCard } = leagues[league].components;

    return isReady ? (
        <AppContainer>
            <GameScreen
                collectableCards={leagues[league].collectableCards}
                PlayableCard={PlayableCard}
                InspectableCard={InspectableCard}
            />
        </AppContainer>
    ) : (
        <AppLoading startAsync={loadAssetsAsync} onFinish={() => setIsReady(true)} onError={console.warn} />
    );
};

/* --- Export App ------------------------------------------------------------------------------ */

export default App;
