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

const frontIconCSS = css`
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
    ${frontIconCSS}
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
    ${frontIconCSS}
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

const CardFooter = styled(View)`
    position: absolute;
    width: 120%;
    height: 90px;
    bottom: -35px;
    background-color: ${({ bgColor }) => bgColor || '#3f3f46'};
    transform: skewY(4deg);
    z-index: 80;
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

    // -- Animation --

    // @ts-ignore
    const { scale, frontOpacity, backOpacity, frontRotateY, backRotateY, translateX, translateY } = useSpring({
        to: {
            scale: CARD_SCALE,
            frontOpacity: -0.7,
            backOpacity: 1,
            frontRotateY: '-180deg',
            backRotateY: '0deg',
            translateX: '0px',
            translateY: '0px',
        },
        from: {
            scale: cHeight / 320,
            frontOpacity: 1,
            backOpacity: -0.7,
            frontRotateY: '0deg',
            backRotateY: '180deg',
            translateX: `${(-width / 2 + (px + cWidth / 2)) * (1 / (cHeight / 320))}px`,
            translateY: `${(-height / 2 + (py + cHeight / 2)) * (1 / (cHeight / 320))}px`,
        },
        reverse: !flipped,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    const { infoOpacity } = useSpring({ infoOpacity: showInfo ? 1 : 0 });

    // -- Render --

    return (
        <TouchableOpacity activeOpacity={1}>
            <DraggableCard
                style={{ transform: [{ scaleX: scale }, { scaleY: scale }, { translateX }, { translateY }] }}
            >
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
                    <CardFooter />
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
        </TouchableOpacity>
    );
};

/* --- Export ------------------------------------------------------------------------------ */

export default InspectableCard;
