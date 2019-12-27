import React, { useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import styled from 'styled-components/native';
// Components
import { GameScreen, InspectableCard } from './src/componentRegistry';

/* --- Types ------------------------------------------------------------------------------ */

type CardImagesType = { [person: string]: any };

/* --- Images ------------------------------------------------------------------------------ */

const cardImages: CardImagesType = {
    bart: require('./assets/ppl/Bart.jpg'),
    brechtB: require('./assets/ppl/BrechtB.jpg'),
    brechtDR: require('./assets/ppl/BrechtDR.jpg'),
    brian: require('./assets/ppl/Brian.jpg'),
    davy: require('./assets/ppl/Davy.jpg'),
    dieter: require('./assets/ppl/Dieter.jpg'),
    elke: require('./assets/ppl/Elke.jpg'),
    frederikC: require('./assets/ppl/FrederikC.jpg'),
    frederikDP: require('./assets/ppl/FrederikDP.jpg'),
    gerda: require('./assets/ppl/Gerda.jpg'),
    gert: require('./assets/ppl/Gert.jpg'),
    jeroen: require('./assets/ppl/Jeroen.jpg'),
    lien: require('./assets/ppl/Lien.jpg'),
    lisette: require('./assets/ppl/Lisette.jpg'),
    manuel: require('./assets/ppl/Manuel.jpg'),
    mathieu: require('./assets/ppl/Mathieu.jpg'),
    nico: require('./assets/ppl/Nico.jpg'),
    niels: require('./assets/ppl/Niels.jpg'),
    olga: require('./assets/ppl/Olga.jpg'),
    robin: require('./assets/ppl/Robin.jpg'),
    rubenC: require('./assets/ppl/RubenC.jpg'),
    rubenH: require('./assets/ppl/RubenH.jpg'),
    sebastian: require('./assets/ppl/Sebastian.jpg'),
    sofie: require('./assets/ppl/Sofie.jpg'),
    thomasC: require('./assets/ppl/ThomasC.jpg'),
    thomasML: require('./assets/ppl/ThomasML.jpg'),
    thorr: require('./assets/ppl/Thorr.jpg'),
    tina: require('./assets/ppl/Tina.jpg'),
    tuur: require('./assets/ppl/Tuur.jpg'),
    veerle: require('./assets/ppl/Veerle.jpg'),
    vincent: require('./assets/ppl/Vincent.jpg'),
};

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

    // -- Render --

    console.log({ loadedCards });

    return isReady ? (
        <AppContainer>
            {/*/}
            <Card />
            {/**/}
            <GameScreen />
        </AppContainer>
    ) : (
        <AppLoading startAsync={loadAssetsAsync} onFinish={() => setIsReady(true)} onError={console.warn} />
    );
};

/* --- Export App ------------------------------------------------------------------------------ */

export default App;
