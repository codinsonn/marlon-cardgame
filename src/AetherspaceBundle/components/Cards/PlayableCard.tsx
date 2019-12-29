import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { animated, useSpring } from 'react-spring/native';
import Emoji from 'react-native-emoji';

/* --- Constants ------------------------------------------------------------------------------ */

const isPhone = Dimensions.get('window').width < 850;

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
    left: ${isPhone ? '4px' : '5px'};
    width: ${isPhone ? '20px' : '28px'};
    height: ${isPhone ? '20px' : '28px'};
    align-items: center;
    justify-content: center;
    border-radius: ${isPhone ? '10' : '14px'};
    border-width: ${isPhone ? '2px' : '3px'};
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
    const { index, overflowFactor, shouldOverflow } = props;

    // State
    const [selected, setSelected] = useState(false);

    // Springs
    const { translateX } = useSpring({
        translateX: shouldOverflow ? `${index * (8 - CARD_WIDTH) * overflowFactor + 8}px` : `${index * 8}px`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    // Render
    return (
        <DraggableCard style={{ transform: [{ translateX }] }} onPress={() => setSelected(s => !s)}>
            <CardFront selected={selected}>
                <BaseValue>
                    <ValueText>10</ValueText>
                </BaseValue>
                <EffectIcon>
                    <Emoji name="handshake" style={{ fontSize: isPhone ? 12 : 18 }} />
                </EffectIcon>
                <StyledImage source={require('../../../../assets/ppl/Thorr.jpg')} resizeMode="cover" />
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
