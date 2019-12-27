import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useSpring, animated } from 'react-spring/native';
import Emoji from 'react-native-emoji';
// Components
import { InfoIcon } from '../../../componentRegistry';

/* --- Constants ------------------------------------------------------------------------------ */

const perspective = 1000;

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
    opacity: 1;
`;

const CardSide = styled(View)`
    position: absolute;
    ${fillParentCSS}
    ${borderRadiusCSS}
    ${({ selected }) => (selected ? 'border: #715DA7 solid 6px;' : '')}
    overflow: hidden;
    background-color: #fff;
`;

const FrontIconCSS = css`
    position: absolute;
    left: 10px;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    border-width: 5px;
    z-index: 100;
`;

const BaseValue = styled(View)`
    ${FrontIconCSS}
    top: 10px;
    border-color: #4ca76c;
    background-color: #3f3f46;
`;

const ValueText = styled(Text)`
    color: #57be7b;
    font-weight: bold;
    font-size: 28px;
`;

const EffectIcon = styled(View)`
    ${FrontIconCSS}
    bottom: 10px;
    border-color: #4ca76c;
    background-color: #3f3f46;
`;

const StyledImage = styled(Image)`
    ${fillParentCSS}
`;

const InfoToggle = styled(TouchableOpacity)`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
`;

const StyledCardInfo = styled(View)`
    position: absolute;
    top: 0px;
    left: 0px;
    ${fillParentCSS}
    flex: 1;
    align-items: center;
    background-color: #ffffff;
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
const CardInfo = animated(StyledCardInfo);

/* --- <Card/> ------------------------------------------------------------------------------ */

const Card = props => {
    // State
    const [selected, setSelected] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [cardScale, setCardScale] = useState('mid');
    const [showInfo, setShowInfo] = useState(false);

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
    const { infoOpacity } = useSpring({ infoOpacity: showInfo ? 1 : 0 });

    // Render
    return (
        <DraggableCard
            style={{ transform: [{ scaleX: scale }, { scaleY: scale }] }}
            onPress={() => setSelected(s => !flipped && !s)}
            onLongPress={() => {
                setFlipped(f => !f);
                setCardScale(flipped ? 'min' : 'max');
            }}
        >
            <CardFront
                style={{
                    opacity: frontOpacity,
                    transform: [{ perspective }, { rotateY: frontRotateY }],
                }}
                selected={selected}
            >
                <BaseValue>
                    <ValueText>10</ValueText>
                </BaseValue>
                <EffectIcon>
                    <Emoji name="handshake" style={{ fontSize: 40 }} />
                </EffectIcon>
                <StyledImage source={require('../../../../assets/ppl/Thorr.jpg')} resizeMode="cover" />
            </CardFront>
            <CardBack style={{ opacity: backOpacity, transform: [{ perspective }, { rotateY: backRotateY }] }}>
                <InfoToggle onPress={() => setShowInfo(!showInfo)}>
                    <InfoIcon />
                </InfoToggle>
                <CardInfo>
                    <PersonName>Thorr Stevens</PersonName>
                    <PersonRole>JavaScript developer</PersonRole>
                    <DividerLine />
                    <Subtitle>
                        <Emoji name="handshake" /> Pair Programming
                    </Subtitle>
                    <Summary>
                        Double the values of all{'\n'}
                        team members in this row{'\n'}
                        who also have the{'\n'}
                        "Pair Programming" effect.
                    </Summary>
                    <Subtitle>
                        <Emoji name="sparkle" /> 10 current value
                    </Subtitle>
                    <Summary>
                        3 base value{'\n'}
                        +1 value boost (2x){'\n'}
                        x2 value multiplier (1x)
                    </Summary>
                </CardInfo>
                <CardInfo style={{ opacity: infoOpacity }}>
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
