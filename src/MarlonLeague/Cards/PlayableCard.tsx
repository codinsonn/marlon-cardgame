import React, { useState, useCallback } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { animated, useSpring } from 'react-spring/native';
import Emoji from 'react-native-emoji';

/* --- Constants ------------------------------------------------------------------------------ */

const isPhone = Dimensions.get('window').width < 850;
const isWeb = Platform.OS === 'web';

const CARD_RATIO = 220 / 320;
const CARD_HEIGHT = Dimensions.get('window').height / 8;
const CARD_WIDTH = CARD_HEIGHT * CARD_RATIO;

/* --- Styles ------------------------------------------------------------------------------ */

const borderRadiusCSS = css`
    border-radius: 8px;
`;

const fillParentCSS = css`
    width: 100%;
    height: 100%;
`;

// -- Styled Components --

const StyledCard = styled(TouchableOpacity)`
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;
    ${borderRadiusCSS}
    opacity: 1;
    z-index: 100;
`;

const CardSide = styled(View)`
    position: absolute;
    ${fillParentCSS}
    ${borderRadiusCSS}
    ${({ selected }) => (selected ? 'border: #C5C7CA solid 2px;' : '')}
    overflow: hidden;
    background-color: #fff;
`;

const FrontIconCSS = css`
    position: absolute;
    display: flex;
    left: ${isPhone ? '4px' : '5px'};
    width: ${isPhone ? '20px' : '28px'};
    height: ${isPhone ? '20px' : '28px'};
    align-items: center;
    justify-content: center;
    border-radius: ${isPhone ? '10' : '14px'};
    border-width: ${isPhone ? '2px' : '3px'};
    ${({ isEmoji }) => (isEmoji && isWeb ? `padding-left: ${isPhone ? 3 : 4}px;` : '')}
    ${({ isValue }) => (isValue && isWeb ? `padding-bottom: ${isPhone ? 0 : 2}px;` : '')}
    z-index: 100;
`;

const BaseValue = styled(View)`
    ${FrontIconCSS}
    top: 5px;
    border-color: #4ca76c;
    background-color: #3f3f46;
`;

const ValueText = styled(Text)`
    color: #57be7b;
    font-weight: bold;
    font-size: ${isPhone ? '10px' : '14px'};
`;

const EffectIcon = styled(View)`
    ${FrontIconCSS}
    left: 5px;
    bottom: 5px;
    border-color: #4ca76c;
    background-color: #3f3f46;
`;

const StyledImage = styled(Image)`
    ${fillParentCSS}
`;

// -- Animated Components --

const DraggableCard = animated(StyledCard);
const CardFront = animated(CardSide);

/* --- <PlayableCard/> ------------------------------------------------------------------------------ */

const PlayableCard = props => {
    // Props
    const { card, index, overflowFactor, shouldOverflow } = props;

    // State
    const [selected, setSelected] = useState(false);
    const [dimensions, setDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });

    // Measure parent dimensions from url
    const measureWidth = useCallback(({ nativeEvent }) => setDimensions({ ...nativeEvent.layout }), []);

    // Springs
    const { translateX } = useSpring({
        translateX: shouldOverflow ? `${index * (8 - CARD_WIDTH) * overflowFactor + 8}px` : `${index * 8}px`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    // onLongPress
    const onLongPress = useCallback(() => {
        if (props.onLongPress) props.onLongPress(card, dimensions);
    }, [card, dimensions]);

    // Render
    return (
        <DraggableCard
            style={{ transform: [{ translateX }] }}
            onPress={props.onPress}
            onLongPress={onLongPress}
            onLayout={measureWidth}
        >
            <CardFront selected={selected}>
                <BaseValue isValue>
                    <ValueText>{card.currentValue}</ValueText>
                </BaseValue>
                {card?.effect?.emojiKey && (
                    <EffectIcon isEmoji>
                        <Emoji
                            name={card.effect.emojiKey}
                            style={{ fontSize: isPhone ? 11 : 17, textAlign: 'center' }}
                        />
                    </EffectIcon>
                )}
                <StyledImage source={card.image} resizeMode="cover" />
            </CardFront>
        </DraggableCard>
    );
};

/* --- Extentsions ------------------------------------------------------------------------------ */

PlayableCard.ratio = CARD_RATIO;
PlayableCard.width = CARD_WIDTH;
PlayableCard.height = CARD_HEIGHT;

/* --- Export ------------------------------------------------------------------------------ */

export default PlayableCard;
