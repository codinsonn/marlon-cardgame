import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useSpring, animated } from 'react-spring/native';
import Emoji from 'react-native-emoji';
// Types
import { MarlonCardType } from '../../MarlonLeague/Config/marlonCards';
// Components
import { InfoIcon } from '../../leagueRegistry';

/* --- Constants ------------------------------------------------------------------------------ */

const perspective = 1000;

const { height, width } = Dimensions.get('window');
const CARD_SCALE = 1;

/* --- Types ------------------------------------------------------------------------------ */

type PlayableCardType = MarlonCardType & { currentValue: string };

/* --- Styles ------------------------------------------------------------------------------ */

const borderRadiusCSS = css`
    border-radius: 14px;
`;

const fillParentCSS = css`
    width: 100%;
    height: 100%;
`;

// -- Styled Components --

const StyledCard = styled(View)`
    width: 220px;
    height: 320px;
    ${borderRadiusCSS}
    opacity: 1;
    z-index: 100;
`;

const CardSide = styled(View)`
    position: absolute;
    ${fillParentCSS}
    ${borderRadiusCSS}
    ${({ selected }) => (selected ? 'border: #C5C7CA solid 6px;' : '')}
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

/* --- <InspectableCard/> ------------------------------------------------------------------------------ */

const InspectableCard = props => {
    // Props
    const { cardStartPosition, isInspecting, ...cardProps } = props;
    const card: PlayableCardType = cardProps;
    const { px, py, cWidth, cHeight } = cardStartPosition || {};

    // State
    const [flipped, setFlipped] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    // didMount()
    useEffect(() => setFlipped(isInspecting), [isInspecting]);

    // Springs
    const { scale } = useSpring({
        scale: flipped || !cHeight ? CARD_SCALE : cHeight / 320,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const { translateX, translateY } = useSpring({
        translateX: flipped || !px ? '0px' : `${(-width / 2 + (px + cWidth / 2)) * (1 / (cHeight / 320))}px`,
        translateY: flipped || !py ? '0px' : `${(-height / 2 + (py + cHeight / 2)) * (1 / (cHeight / 320))}px`,
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
        <DraggableCard style={{ transform: [{ scaleX: scale }, { scaleY: scale }, { translateX }, { translateY }] }}>
            <CardFront
                style={{
                    opacity: frontOpacity,
                    transform: [{ perspective }, { rotateY: frontRotateY }],
                }}
            >
                <BaseValue>
                    <ValueText>{card.currentValue}</ValueText>
                </BaseValue>
                {card?.effect?.emojiKey && (
                    <EffectIcon>
                        <Emoji name={card?.effect?.emojiKey} style={{ fontSize: 40 }} />
                    </EffectIcon>
                )}
                <StyledImage source={card.image} resizeMode="cover" />
            </CardFront>
            <CardBack style={{ opacity: backOpacity, transform: [{ perspective }, { rotateY: backRotateY }] }}>
                <InfoToggle onPress={() => setShowInfo(!showInfo)}>
                    <InfoIcon />
                </InfoToggle>
                <CardInfo>
                    <PersonName>{card.fullName}</PersonName>
                    <PersonRole>{card.title}</PersonRole>
                    <DividerLine />
                    <Subtitle>
                        <Emoji name={card?.effect?.emojiKey} /> {card?.effect?.title}
                    </Subtitle>
                    <Summary>{`${card?.effect?.description}`}</Summary>
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
                    <PersonName>{card.fullName}</PersonName>
                    <PersonRole>{card.title}</PersonRole>
                    <DividerLine />
                    <Subtitle>Je moet bij mij zijn voor</Subtitle>
                    <Summary>{`${card.companyRole}`}</Summary>
                    <Subtitle>Maar ook voor info over</Subtitle>
                    <Summary>{`${card.summary}`}</Summary>
                </CardInfo>
            </CardBack>
        </DraggableCard>
    );
};

/* --- Export ------------------------------------------------------------------------------ */

export default InspectableCard;
