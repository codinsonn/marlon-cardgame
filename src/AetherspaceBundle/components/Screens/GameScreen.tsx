import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
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
const ROW_WIDTH = Dimensions.get('window').width * 0.85;

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

const CardRow = styled(TouchableOpacity)`
    position: absolute;
    flex: 1;
    height: 100%;
    width: 85%;
    right: 0px;
    ${({ isCardContainer }) => (isCardContainer ? 'flex-direction: row;' : '')}
    z-index: ${({ isCardContainer }) => (isCardContainer ? 20 : 10)};
    align-items: ${({ alignment }) => alignment || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
`;

/* --- <GameScreen/> ------------------------------------------------------------------------------ */

const GameScreen = props => {
    // Props
    const {} = props;

    // State
    const [cards, setCards] = useState({
        'opponent-business': [0],
        'opponent-design': [0],
        'opponent-technology': [0],
        technology: [0],
        design: [0],
        business: [0],
    });

    // -- Render --

    return (
        <GameContainer>
            {/*/}
            <InspectionContainer>
                <InspectableCard />
            </InspectionContainer>
            {/**/}
            <GameField>
                {Object.entries(cards).map(([rowKey, rowCards], rowIndex) => {
                    const arrIndex = rowIndex < 3 ? rowIndex : 5 - rowIndex;
                    const bgColor = ['#715DA7', '#469CAC', '#57BE7B'][arrIndex];
                    const totalBgColor = ['#635293', '#3D8997', '#4CA76C'][arrIndex];
                    const cardOverflow = rowCards.length * PlayableCard.width - ROW_WIDTH + rowCards.length * 12;
                    const shouldOverflow = cardOverflow > 0;
                    const overflowFactor = cardOverflow / ROW_WIDTH > 0.5 ? 0.5 : cardOverflow / ROW_WIDTH;
                    const onPress = () => setCards({ ...cards, [rowKey]: [...rowCards, rowCards.length] });
                    return (
                        <GameRow bgColor={bgColor} isTopRow={rowIndex === 0} isBottomRow={rowIndex === 5}>
                            <RowTotal bgColor={totalBgColor}>
                                <RowTotal.Text>{rowCards.length * 10}</RowTotal.Text>
                            </RowTotal>
                            <CardRow
                                justify={shouldOverflow ? 'flex-start' : 'center'}
                                onPress={onPress}
                                isCardContainer
                            >
                                {rowCards.map((c, n) => (
                                    <PlayableCard
                                        key={`${rowKey}-${JSON.stringify(c)}-${n}`}
                                        index={n}
                                        overflowFactor={overflowFactor}
                                        shouldOverflow={shouldOverflow}
                                    />
                                ))}
                            </CardRow>
                            <CardRow alignment={rowIndex < 3 ? 'flex-start' : 'flex-end'}>
                                {rowKey.includes('business') && (
                                    <BusinessIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                                )}
                                {rowKey.includes('design') && (
                                    <DesignIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                                )}
                                {rowKey.includes('technology') && (
                                    <TechnologyIllustration width={ILLUSTRATION_HEIGHT} height="66%" />
                                )}
                            </CardRow>
                        </GameRow>
                    );
                })}
            </GameField>
        </GameContainer>
    );
};

/* --- Export GameScreen ------------------------------------------------------------------------------ */

export default GameScreen;
