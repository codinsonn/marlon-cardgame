const ROWS = Object.freeze({
    BUSINESS: {
        name: 'business',
        description: 'Home to all PM / UX / OfficeManager / Marketing Manager cards',
        allowedRoles: ['pm', 'ux', 'mm', 'om'],
    },
    DESIGN: {
        name: 'design',
        description: 'Home to all UX / FE cards',
        allowedRoles: ['ux', 'fe', 'mm'],
    },
    TECHNOLOGY: {
        name: 'technology',
        description: 'Home to all FE / JS / BE cards',
        allowedRoles: ['fe', 'js', 'be'],
    },
});

const { BUSINESS, DESIGN, TECHNOLOGY } = ROWS;

/* --- Player Effects ------------------------------------------------------------------------------ */

const EFFECTS = Object.freeze({
    // -- Row & Special Effect Cards --
    REMOTE_WORK: {
        name: 'remote-work',
        description: 'Return any player card on your side of the field back to your hand',
    },
    RECRUITED: {
        name: 'recruited',
        description: 'Remove all cards with the highest value from both sides of the field',
    },
    PIZZA_TIME: {
        name: 'pizza-time',
        description: 'Double the values of all cards on a row of choice',
    },
    WIFI_DOWN: {
        name: 'wifi-down',
        description: 'Reduce the base values of all cards in the TECHNOLOGY row to 1 on both sides of the field',
    },
    LICENCE_EXPIRED: {
        name: 'licence-expired',
        description: 'Reduce the base values of all cards in the DESIGN row to 1 on both sides of the field',
    },
    LOW_BUDGET: {
        name: 'low-budget',
        description: 'Reduce the base values of all cards in the BUSINESS row to 1 on both sides of the field',
    },
    OFFICE_MANAGEMENT: {
        name: 'office-management',
        description: 'Remove all WIFI_DOWN, LICENCE_EXPIRED and LOW_BUDGET effects',
    },
    // -- Player Card Effects --
    OFFICE_MANAGER: {
        name: 'office-manager',
        description: 'Spawn an OFFICE_MANAGEMENT row effect, clearing all WIFI_DOWN, LICENCE_EXPIRED & LOW_BUDGET',
    },
    NAME_COLLECTOR: {
        name: 'name-collector',
        description:
            'Double the values of all cards on your side that share the same name (cumulative, incl. copies of this card)',
    },
    TEAM_LEAD: {
        name: 'team-lead',
        description: 'Add +3 to all junior & +1 to all medior/senior marloni of this cards team',
    },
    HACKER_MAN: {
        name: 'hacker-man',
        description:
            'If opponents TECHNOLOGY row >10, crash laptop of devs in that row with highest value, removing them from the field.',
    },
    PAIR_PROGRAMMING: {
        name: 'pair-programming',
        description: 'Double the values of all team members in this row who also have the PAIR_PROGRAMMING effect',
    },
    QUICK_LEARNER: {
        name: 'quick-learner',
        description: 'Add +1 to this card for all team members in this row',
    },
    INSPIRATION_BOOST: {
        name: 'inspiration-boost',
        description: 'Add +1 to this card at the end of every turn until the round is finished',
    },
    PROTOTYPING: {
        name: 'prototyping',
        description: 'Gain +1 for all JS & FE cards & add +1 to all JS & FE cards on your side of the field',
    },
    CLIENT_BRIEFING: {
        name: 'client-briefing',
        description: "Play card on opponent's side of field, but draw 2 cards from your deck to your hand",
    },
    ONLINE_MARKETING: {
        name: 'online-marketing',
        description: 'Gain +1 for every PM card & add +1 to every PM on your side of the field',
    },
    PLANNING: {
        name: 'planning',
        description: "Revive a player card from the 'Out of Office' / graveyard stack",
    },
    // -- Special Card Effects --
    PLATINUM_CARD: {
        name: 'platinum-card',
        description: 'Locks card at base value x2. Immune to any negative OR positive effects. Awarded rarely.',
    },
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
    ONLINE_MARKETING,
    PLANNING,
    PLATINUM_CARD,
} = EFFECTS;

/* --- Teams & Roles ------------------------------------------------------------------------------ */

const ROLES = Object.freeze({
    BACK_END: {
        name: 'be',
        title: 'PHP developer',
        allowedRows: ['technology'],
        possibleEffects: ['quick-learner', 'hacker-man', 'pair-programming'],
    },
    JAVASCRIPT: {
        name: 'js',
        title: 'Javascript developer',
        allowedRows: ['technology'],
        possibleEffects: ['quick-learner', 'hacker-man', 'pair-programming'],
    },
    FRONT_END: {
        name: 'fe',
        title: 'Front-End developer',
        allowedRows: ['technology', 'design'],
        possibleEffects: ['quick-learner', 'prototyping', 'pair-programming'],
    },
    UX_DESIGN: {
        name: 'ux',
        title: 'User experience designer',
        allowedRows: ['design', 'business'],
        possibleEffects: ['quick-learner', 'inspiration-boost', 'prototyping'],
    },
    MARKETING_MANAGER: {
        name: 'mm',
        title: 'Online Marketing Manager',
        allowedRows: ['business'],
        possibleEffects: ['client-briefing', 'inspiration-boost', 'online-marketing'],
    },
    OFFICE_MANAGER: {
        name: 'om',
        title: 'Office Manager',
        allowedRows: ['business'],
        possibleEffects: ['office-manager'],
    },
    PROJECT_MANAGER: {
        name: 'pm',
        title: 'Project Manager',
        allowedRows: ['business'],
        possibleEffects: ['planning', 'client-briefing'],
    },
});
