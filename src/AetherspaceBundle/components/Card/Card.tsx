import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useSpring, animated } from 'react-spring/native';

/* --- Constants ------------------------------------------------------------------------------ */

const perspective = 350;

const { height } = Dimensions.get('window');
const ROW_HEIGHT = height / 8;

const MIN_CARD_SCALE = ROW_HEIGHT / 320;
const MID_CARD_SCALE = MIN_CARD_SCALE * 2;
const MAX_CARD_SCALE = 1;

const CARD_SCALES = {
    min: MIN_CARD_SCALE,
    mid: MID_CARD_SCALE,
    max: MAX_CARD_SCALE,
};

/* --- Styles ------------------------------------------------------------------------------ */

const borderRadiusCSS = css`
    border-radius: 14px;
`;

const fillParentCSS = css`
    width: 100%;
    height: 100%;
`;

// -- Styled Components --

const StyledCard = styled(TouchableOpacity)`
    width: 220px;
    height: 320px;
    ${borderRadiusCSS}
`;

const CardSide = styled(View)`
    position: absolute;
    ${fillParentCSS}
    ${borderRadiusCSS}
    overflow: hidden;
    background-color: #fff;
`;

const StyledImage = styled(Image)`
    ${fillParentCSS}
`;

const CardInfo = styled(View)`
    ${fillParentCSS}
    flex: 1;
    align-items: center;
`;

const PersonName = styled(Text)`
    margin-top: 32px;
    font-size: 16px;
    font-weight: bold;
    color: #1f4b90;
`;

const PersonRole = styled(Text)`
    margin-top: 6px;
    font-size: 8px;
    font-weight: bold;
    color: #87cffa;
`;

const DividerLine = styled(View)`
    margin: 20px 0px;
    width: 35px;
    height: 1px;
    background-color: #87cffa;
`;

const Subtitle = styled(Text)`
    margin-bottom: 6px;
    font-size: 8px;
    font-weight: bold;
    color: #333333;
`;

const Summary = styled(Text)`
    margin-bottom: 32px;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    line-height: 16px;
    color: #1f4b90;
`;

// -- Animated Components --

const DraggableCard = animated(StyledCard);
const CardFront = animated(CardSide);
const CardBack = animated(CardSide);

/* --- <Card/> ------------------------------------------------------------------------------ */

const Card = props => {
    // State
    const [flipped, setFlipped] = useState(false);
    const [cardScale, setCardScale] = useState('mid');

    // Springs
    const { scale } = useSpring({
        scale: CARD_SCALES[cardScale],
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const { frontOpacity, backOpacity, frontRotateY, backRotateY } = useSpring({
        frontOpacity: flipped ? -0.7 : 1,
        backOpacity: flipped ? 1 : -0.7,
        frontRotateY: `${flipped ? 180 : 0}deg`,
        backRotateY: `${flipped ? 0 : -180}deg`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    // Render
    return (
        <DraggableCard
            style={{ transform: [{ scaleX: scale }, { scaleY: scale }] }}
            onPress={() => {
                setFlipped(f => !f);
                setCardScale(flipped ? 'mid' : 'max');
            }}
        >
            <CardFront
                style={{
                    opacity: frontOpacity,
                    transform: [{ perspective }, { rotateY: frontRotateY }],
                }}
            >
                <StyledImage source={require('../../../../assets/Thorr.jpg')} resizeMode="cover" />
            </CardFront>
            <CardBack style={{ opacity: backOpacity, transform: [{ perspective }, { rotateY: backRotateY }] }}>
                <CardInfo>
                    <PersonName>Thorr Stevens</PersonName>
                    <PersonRole>JavaScript developer</PersonRole>
                    <DividerLine />
                    <Subtitle>Je moet bij mij zijn voor</Subtitle>
                    <Summary>Fratello serverside rendering</Summary>
                    <Subtitle>Maar ook voor info over</Subtitle>
                    <Summary>
                        React hooks of componenten{'\n'}
                        React Native apps{'\n'}
                        Node & JavaScript{'\n'}
                        Marvel films{'\n'}
                        thunder & lightning
                    </Summary>
                </CardInfo>
            </CardBack>
        </DraggableCard>
    );
};

/* --- Export ------------------------------------------------------------------------------ */

export default Card;
