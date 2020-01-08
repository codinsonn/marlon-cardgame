import marlonCharacters, { MarlonCharacterType } from './marlonCharacters';
import marlonEffects, { MarlonEffectType } from './marlonEffects';
import marlonImages from './marlonImages';

/* --- Types ------------------------------------------------------------------------------ */

export type MarlonCardType = MarlonCharacterType & {
    cardID: string;
    charKey: string;
    effectKey: string;
    leagueKey: 'marlon';
    image: any;
    effect: MarlonEffectType;
};

export type MarlonCardsType = { [cardID: string]: MarlonCardType };

/* --- Marlon League Cards ------------------------------------------------------------------------------ */

const marlonCards: MarlonCardsType = {};
Object.entries(marlonCharacters).forEach(([charKey, charCard]) => {
    charCard.possibleEffects.forEach(effectKey => {
        const cardID = `${charKey}-${effectKey}`;
        const marlonLeagueCard: MarlonCardType = {
            cardID,
            charKey,
            effectKey,
            leagueKey: 'marlon',
            image: marlonImages[charKey],
            ...charCard,
            effect: marlonEffects[effectKey],
        };
        marlonCards[cardID] = marlonLeagueCard;
    });
});

/* --- Export Marlon League Cards -------------------------------------------------------------------------- */

export default marlonCards;
