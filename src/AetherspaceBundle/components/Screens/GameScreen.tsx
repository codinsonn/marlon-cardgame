import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
// Components
import {
    PlayableCard,
    InspectableCard,
    BusinessIllustration,
    DesignIllustration,
    TechnologyIllustration,
} from '../../../componentRegistry';

/* --- Contants ------------------------------------------------------------------------------ */

const isPhone = Dimensions.get('window').width < 850;

const ILLUSTRATION_HEIGHT = Dimensions.get('window').height / 9;

/* --- Styles ------------------------------------------------------------------------------ */

const GameContainer = styled(View)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #87cffa;
    align-items: center;
    justify-content: center;
`;

const InspectionContainer = styled(View)`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 200;
`;

const GameField = styled(View)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 86%;
    background-color: #fff;
`;

const GameRow = styled(View)`
    ${({ bgColor, isTopRow, isBottomRow }) => `
        display: flex;
        flex-direction: row;
        flex: 1;
        width: 100%;
        ${bgColor ? `background-color: ${bgColor};` : ''}
        ${!isTopRow ? 'border-top-color: #FFFFFF;' : ''}
        ${!isTopRow ? 'border-top-width: 2px;' : ''}
        ${!isBottomRow ? 'border-bottom-color: #FFFFFF;' : ''}
        ${!isBottomRow ? 'border-bottom-width: 2px;' : ''}
    `}
`;

const RowTotal = styled(View)`
    position: absolute;
    height: 100%;
    width: 15%;
    left: 0px;
    align-items: center;
    justify-content: center;
    border-right-color: #ffffff;
    border-right-width: 4px;
    ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : '')}
`;

RowTotal.Text = styled(Text)`
    font-size: ${isPhone ? '15px' : '30px'};
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;

const CardRow = styled(View)`
    position: absolute;
    height: 100%;
    width: 85%;
    right: 0px;
    ${({ isCardContainer }) => (isCardContainer ? 'flex-direction: row;' : '')}
    z-index: ${({ isCardContainer }) => (isCardContainer ? 20 : 10)};
    align-items: ${({ alignment }) => alignment || 'center'};
    justify-content: center;
`;

/* --- <GameScreen/> ------------------------------------------------------------------------------ */

const GameScreen = props => {
    // Props
    const {} = props;

    // Render
    return (
        <GameContainer>
            {/*/}
            <InspectionContainer>
                <InspectableCard />
            </InspectionContainer>
            {/**/}
            <GameField>
                <GameRow bgColor="#715DA7" isTopRow>
                    <RowTotal bgColor="#635293">
                        <RowTotal.Text>110</RowTotal.Text>
                    </RowTotal>
                    <CardRow isCardContainer>
                        <PlayableCard />
                    </CardRow>
                    <CardRow alignment="flex-start">
                        <BusinessIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                    </CardRow>
                </GameRow>
                <GameRow bgColor="#469CAC">
                    <RowTotal bgColor="#3D8997">
                        <RowTotal.Text>20</RowTotal.Text>
                    </RowTotal>
                    <CardRow isCardContainer>
                        <PlayableCard />
                    </CardRow>
                    <CardRow alignment="flex-start">
                        <DesignIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                    </CardRow>
                </GameRow>
                <GameRow bgColor="#57BE7B">
                    <RowTotal bgColor="#4CA76C">
                        <RowTotal.Text>5</RowTotal.Text>
                    </RowTotal>
                    <CardRow isCardContainer>
                        <PlayableCard />
                        <PlayableCard />
                        <PlayableCard />
                        <PlayableCard />
                        <PlayableCard />
                    </CardRow>
                    <CardRow alignment="flex-start">
                        <TechnologyIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                    </CardRow>
                </GameRow>
                <GameRow bgColor="#57BE7B">
                    <RowTotal bgColor="#4CA76C">
                        <RowTotal.Text>32</RowTotal.Text>
                    </RowTotal>
                    <CardRow isCardContainer>
                        <PlayableCard />
                    </CardRow>
                    <CardRow alignment="flex-end">
                        <TechnologyIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                    </CardRow>
                </GameRow>
                <GameRow bgColor="#469CAC">
                    <RowTotal bgColor="#3D8997">
                        <RowTotal.Text>333</RowTotal.Text>
                    </RowTotal>
                    <CardRow isCardContainer>
                        <PlayableCard />
                    </CardRow>
                    <CardRow alignment="flex-end">
                        <DesignIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                    </CardRow>
                </GameRow>
                <GameRow bgColor="#715DA7" isBottomRow>
                    <RowTotal bgColor="#635293">
                        <RowTotal.Text>89</RowTotal.Text>
                    </RowTotal>
                    <CardRow isCardContainer>
                        <PlayableCard />
                    </CardRow>
                    <CardRow alignment="flex-end">
                        <BusinessIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                    </CardRow>
                </GameRow>
            </GameField>
        </GameContainer>
    );
};

/* --- Export GameScreen ------------------------------------------------------------------------------ */

export default GameScreen;
