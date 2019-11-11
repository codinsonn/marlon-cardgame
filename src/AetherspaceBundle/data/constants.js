const ROWS = Object.freeze({
    BUSINESS: 'Home to all PM / UX / OfficeManager / Marketeer cards',
    DESIGN: 'Home to all UX / FE cards',
    TECHNOLOGY: 'Home to all FE / JS / BE cards',
});

const { BUSINESS, DESIGN, TECHNOLOGY } = ROWS;

/* --- Player Effects ------------------------------------------------------------------------------ */

const EFFECTS = Object.freeze({
    // -- Row & Special Effect Cards --
    REMOTE_WORK: 'Return any player card on your side of the field back to your hand',
    BETTER_OFFER: 'Remove all cards with the highest value from both sides of the field',
    PIZZA_TIME: 'Double the values of all cards on a row of choice',
    WIFI_DOWN: 'Reduce the base values of all cards in the TECHNOLOGY row to 1 on both sides of the field',
    LICENCE_EXPIRED: 'Reduce the base values of all cards in the DESIGN row to 1 on both sides of the field',
    LOW_BUDGET: 'Reduce the base values of all cards in the BUSINESS row to 1 on both sides of the field',
    OFFICE_MANAGEMENT: 'Remove all WIFI_DOWN, LICENCE_EXPIRED and LOW_BUDGET effects',
    // -- Player Card Effects --
    OFFICE_MANAGER: 'Spawn an OFFICE_MANAGEMENT row effect, clearing all WIFI_DOWN, LICENCE_EXPIRED & LOW_BUDGET',
    NAME_COLLECTOR: 'Double the values of all cards on your side that share the same name (cumulative, incl. copies of this card)',
    TEAM_LEAD: 'Add +3 to all junior & +1 to all medior/senior marloni of this cards team',
    HACKER_MAN: 'If opponents TECHNOLOGY row >10, crash laptop of devs in that row with highest value, removing them from the field.',
    PAIR_PROGRAMMING: 'Double the values of all team members in this row who also have the PAIR_PROGRAMMING effect',
    QUICK_LEARNER: 'Add +1 to this card for all team members in this row',
    INSPIRATION_BOOST: 'Add +1 to this card at the end of every turn until the round is finished',
    PROTOTYPING: 'Add +1 to all JS & FE cards on your side of the field',
    CLIENT_BRIEFING: "Play card on opponent's side of field, but draw 2 cards from your deck to your hand",
    PLANNING: "Revive a player card from the 'Out of Office' / graveyard stack",
    // -- Special Card Effects --
    PLATINUM_CARD: 'Locks card at base value x2. Immune to any negative OR positive effects. Awarded rarely.',
});

const {
    OFFICE_MANAGER,
    NAME_COLLECTOR,
    TEAM_LEAD,
    HACKER_MAN,
    PAIR_PROGRAMMING,
    QUICK_LEARNER,
    INSPIRATION_BOOST,
    PROTOTYPING,
    CLIENT_BRIEFING,
    PLANNING,
} = EFFECTS;

/* --- Teams & Roles ------------------------------------------------------------------------------ */

const ROLES = Object.freeze({
    BACK_END: {
        allowedRows: [TECHNOLOGY],
        possibleEffects: [QUICK_LEARNER, HACKER_MAN, PAIR_PROGRAMMING],
    },
    JAVASCRIPT: {
        allowedRows: [TECHNOLOGY],
        possibleEffects: [QUICK_LEARNER, HACKER_MAN, PAIR_PROGRAMMING],
    },
    FRONT_END: {
        allowedRows: [TECHNOLOGY, DESIGN],
        possibleEffects: [QUICK_LEARNER, PROTOTYPING, PAIR_PROGRAMMING],
    },
    UX_DESIGN: {
        allowedRows: [DESIGN, BUSINESS],
        possibleEffects: [QUICK_LEARNER, INSPIRATION_BOOST, PROTOTYPING],
    },
    MARKETEER: {
        allowedRows: [BUSINESS],
        possibleEffects: [CLIENT_BRIEFING, INSPIRATION_BOOST],
    },
    OFFICE_MANAGER: {
        allowedRows: [BUSINESS],
        possibleEffects: [OFFICE_MANAGER],
    },
    PROJECT_MANAGER: {
        allowedRows: [BUSINESS],
        possibleEffects: [PLANNING, CLIENT_BRIEFING],
    },
});
