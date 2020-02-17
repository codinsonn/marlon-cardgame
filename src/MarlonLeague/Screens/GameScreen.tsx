import React, { useState, useMemo, useCallback } from 'react';
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

const InspectionContainer = styled(TouchableOpacity)`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 200;
`;

const GameField = styled(View)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 86%;
    /*background-color: #fff;*/
`;

const GameRow = styled(View)`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex: 1;
    width: 92%;
    border-radius: 14px;
    margin: 3px 0px;
    ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : '')}
`;

const RowTotal = styled(View)`
    position: absolute;
    height: 40px;
    width: 40px;
    left: -18px;
    align-self: center;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    z-index: 100;
    ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : '')}
`;

RowTotal.InnerBg = styled(View)`
    position: absolute;
    height: 60px;
    width: 60px;
    left: -28px;
    border-radius: 30px;
    background-color: #fff;
    opacity: 0.4;
`;

RowTotal.OuterBg = styled(View)`
    position: absolute;
    height: 80px;
    width: 80px;
    left: -38px;
    border-radius: 40px;
    background-color: #fff;
    opacity: 0.2;
`;

RowTotal.Text = styled(Text)`
    font-size: ${isPhone ? '15px' : '18px'};
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;

const CardRow = styled(TouchableOpacity)`
    position: absolute;
    flex: 1;
    height: 100%;
    width: 100%; /*85%;*/
    right: 0px;
    overflow: scroll;
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
    const [isInspecting, setIsInspecting] = useState(false);
    const [inspectedCard, setInspectedCard] = useState(null);
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
    }, [cards, inspectedCard]);

    const onInspectCard = useCallback(
        (cardToInspect, cardStartPosition) => {
            setIsInspecting(true);
            setInspectedCard({ ...cardToInspect, cardStartPosition });
        },
        [cards],
    );

    // Row Clickhandler
    const onAddCard = useCallback(
        rowKey => {
            const cardsInRow = cards[rowKey].map(({ cardID }) => cardID);
            const allowedCards = Object.values(collectableCards).filter(({ cardID, allowedRows }) => {
                const alreadyPlayed = cardsInRow.includes(cardID);
                const allowedInRow = allowedRows.includes(rowKey);
                return !alreadyPlayed && allowedInRow;
            });
            const newCardIndex = Math.round(Math.random() * allowedCards.length);
            const newCard = allowedCards[newCardIndex];
            if (newCard) setCards({ ...cards, [rowKey]: [...cards[rowKey], newCard] });
        },
        [cards],
    );

    // -- Render --

    return (
        <GameContainer>
            {!!inspectedCard && (
                <InspectionContainer
                    onPress={() => {
                        setIsInspecting(false);
                        setTimeout(() => setInspectedCard(null), 600);
                    }}
                >
                    <InspectableCard {...inspectedCard} isInspecting={isInspecting} />
                </InspectionContainer>
            )}
            <GameField>
                {Object.entries(sortedRows).map(([rowKey, rowCards], rowIndex) => {
                    const arrIndex = rowIndex < 3 ? rowIndex : 5 - rowIndex;
                    const bgColor = ['#715DA7', '#469CAC', '#57BE7B'][arrIndex];
                    const totalBgColor = ['#635293', '#3D8997', '#4CA76C'][arrIndex];
                    const cardOverflow = rowCards.length * PlayableCard.width - ROW_WIDTH + rowCards.length * 12;
                    const shouldOverflow = cardOverflow > 0;
                    const overflowFactor = cardOverflow / ROW_WIDTH > 0.5 ? 0.5 : cardOverflow / ROW_WIDTH;
                    // Calculate row & card values
                    let rowTotal = 0;
                    const cardsWithValues = rowCards.map(card => {
                        const currentValue = card.baseValue;
                        rowTotal += currentValue;
                        return { ...card, currentValue };
                    });
                    // Render row
                    return (
                        <GameRow key={rowKey} bgColor={bgColor}>
                            <RowTotal bgColor={totalBgColor}>
                                <RowTotal.Text>{rowTotal}</RowTotal.Text>
                            </RowTotal>
                            <CardRow
                                justify={shouldOverflow ? 'flex-start' : 'center'}
                                onPress={() => onAddCard(rowKey)}
                                isCardContainer
                            >
                                <RowTotal.OuterBg />
                                <RowTotal.InnerBg />
                                {cardsWithValues.map((card, i) => (
                                    <PlayableCard
                                        key={`${rowKey}-${JSON.stringify(card.cardID)}-${i}`}
                                        index={i}
                                        isVisible={!inspectedCard || inspectedCard.cardID !== card.cardID}
                                        cardsInRow={cardsWithValues.length}
                                        card={{ ...card }}
                                        overflowFactor={overflowFactor}
                                        shouldOverflow={shouldOverflow}
                                        onPress={() => onAddCard(rowKey)}
                                        onLongPress={onInspectCard}
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
