import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';
// Components
import { BusinessIllustration, DesignIllustration, TechnologyIllustration } from '../../leagueRegistry';

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
    const { collectableCards, PlayableCard, InspectableCard } = props;

    // State
    const [cards, setCards] = useState({
        'opponent-business': [],
        'opponent-design': [],
        'opponent-technology': [],
        technology: [],
        design: [],
        business: [],
    });

    // -- Sort Rows --

    const sortedRows = useMemo(() => {
        const order = [
            'opponent-business',
            'opponent-design',
            'opponent-technology',
            'technology',
            'design',
            'business',
        ];
        return order.reduce((acc, rowKey) => ({ ...acc, [rowKey]: cards[rowKey] }), {});
    }, [cards]);

    // -- Render --

    return (
        <GameContainer>
            {/*/}
            <InspectionContainer>
                <InspectableCard />
            </InspectionContainer>
            {/**/}
            <GameField>
                {Object.entries(sortedRows).map(([rowKey, rowCards], rowIndex) => {
                    const arrIndex = rowIndex < 3 ? rowIndex : 5 - rowIndex;
                    const bgColor = ['#715DA7', '#469CAC', '#57BE7B'][arrIndex];
                    const totalBgColor = ['#635293', '#3D8997', '#4CA76C'][arrIndex];
                    const cardOverflow = rowCards.length * PlayableCard.width - ROW_WIDTH + rowCards.length * 12;
                    const shouldOverflow = cardOverflow > 0;
                    const overflowFactor = cardOverflow / ROW_WIDTH > 0.5 ? 0.5 : cardOverflow / ROW_WIDTH;
                    // Row Clickhandlers
                    const onPress = () => {
                        const cardsInRow = cards[rowKey].map(({ cardID }) => cardID);
                        const allowedCards = Object.values(collectableCards).filter(({ cardID, allowedRows }) => {
                            const alreadyPlayed = cardsInRow.includes(cardID);
                            const allowedInRow = allowedRows.includes(rowKey);
                            return !alreadyPlayed && allowedInRow;
                        });
                        const newCardIndex = Math.round(Math.random() * allowedCards.length);
                        const newCard = allowedCards[newCardIndex];
                        if (newCard) setCards({ ...cards, [rowKey]: [...rowCards, newCard] });
                    };
                    // Calculate row & card values
                    let rowTotal = 0;
                    const cardsWithValues = rowCards.map(card => {
                        const currentValue = card.baseValue;
                        rowTotal += currentValue;
                        return { ...card, currentValue };
                    });
                    // Render row
                    return (
                        <GameRow key={rowKey} bgColor={bgColor} isTopRow={rowIndex === 0} isBottomRow={rowIndex === 5}>
                            <RowTotal bgColor={totalBgColor}>
                                <RowTotal.Text>{rowTotal}</RowTotal.Text>
                            </RowTotal>
                            <CardRow
                                justify={shouldOverflow ? 'flex-start' : 'center'}
                                onPress={onPress}
                                isCardContainer
                            >
                                {cardsWithValues.map((card, i) => (
                                    <PlayableCard
                                        key={`${rowKey}-${JSON.stringify(card.cardID)}-${i}`}
                                        index={i}
                                        card={{ ...card }}
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
