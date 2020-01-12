import marlonCharacters, { MarlonCharacterType } from './marlonCharacters';
import marlonEffects, { MarlonEffectType } from './marlonEffects';
import marlonImages from './marlonImages';

/* --- Types ------------------------------------------------------------------------------ */

export type MarlonCardType = MarlonCharacterType & {
    cardID: string;
    charKey: string;
    effectKey: string;
    leagueKey: 'marlon';
    baseValue: number;
    image: any;
    effect: MarlonEffectType;
};

export type MarlonCardsType = { [cardID: string]: MarlonCardType };

/* --- Marlon League Cards ------------------------------------------------------------------------------ */

const marlonCards: MarlonCardsType = {};
Object.entries(marlonCharacters).forEach(([charKey, charCard]) => {
    charCard.possibleEffects.forEach(effectKey => {
        const cardID = `${charKey}-${effectKey}`;
        const effect = marlonEffects[effectKey];
        // Calculate Base Value
        const startYear = new Date(charCard.startDate).getFullYear();
        const baseValue = 1 + (new Date().getFullYear() - startYear);
        // Create & Assign Card
        const card: MarlonCardType = {
            cardID,
            charKey,
            effectKey,
            leagueKey: 'marlon',
            baseValue: effectKey === 'platinum-card' ? baseValue * 2 : baseValue,
            image: marlonImages[charKey],
            ...charCard,
            effect,
        };
        if (effectKey === 'consultancy') card.allowedRows = card.allowedRows.map(r => `opponent-${r}`);
        marlonCards[cardID] = card;
    });
});

/* --- Export Marlon League Cards -------------------------------------------------------------------------- */

export default marlonCards;
