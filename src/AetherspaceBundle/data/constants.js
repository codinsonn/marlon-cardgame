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

/* --- Player Effects ------------------------------------------------------------------------------ */

const EFFECTS = Object.freeze({
    // -- Row & Special Effect Cards --
    REMOTE_WORK: {
        name: 'remote-work',
        emoji: '🏡',
        emojiKey: 'house-with-garden',
        description: 'Return any player card on your side of the field back to your hand',
    },
    RECRUITED: {
        name: 'recruited',
        emoji: '👋',
        emojiKey: 'wave',
        description: 'Remove all cards with the highest value from both sides of the field',
    },
    PIZZA_TIME: {
        name: 'pizza-time',
        emoji: '🍕',
        emojiKey: 'pizza',
        description: 'Double the values of all cards on a row of choice',
    },
    WIFI_DOWN: {
        name: 'wifi-down',
        emoji: '🙅‍♂️',
        emojiKey: 'no-good-man',
        description: 'Reduce the base values of all cards in the TECHNOLOGY row to 1 on both sides of the field',
    },
    LICENCE_EXPIRED: {
        name: 'licence-expired',
        emoji: '🔐',
        emojiKey: 'closed-lock-with-key',
        description: 'Reduce the base values of all cards in the DESIGN row to 1 on both sides of the field',
    },
    LOW_BUDGET: {
        name: 'low-budget',
        emoji: '📉',
        emojiKey: 'chart_with_downwards_trend',
        description: 'Reduce the base values of all cards in the BUSINESS row to 1 on both sides of the field',
    },
    OFFICE_MANAGEMENT: {
        name: 'office-management',
        emoji: '🛠',
        emojiKey: 'hammer-and-pick',
        description: 'Remove all WIFI_DOWN, LICENCE_EXPIRED and LOW_BUDGET effects',
    },
    // -- Player Card Effects --
    OFFICE_MANAGER: {
        name: 'office-manager',
        emoji: '🛠',
        emojiKey: 'hammer-and-pick',
        description: 'Spawn an OFFICE_MANAGEMENT row effect, clearing all WIFI_DOWN, LICENCE_EXPIRED & LOW_BUDGET',
    },
    NAME_COLLECTOR: {
        name: 'name-collector',
        emoji: '👥',
        emojiKey: 'busts-in-silhouettte',
        description:
            'Double the values of all cards on your side that share the same name (cumulative, incl. copies of this card)',
    },
    TEAM_LEAD: {
        name: 'team-lead',
        emoji: '🧙‍♂️',
        emojiKey: 'man-mage',
        description: 'Add +3 to all junior & +1 to all medior/senior marloni of this cards team',
    },
    HACKER_MAN: {
        name: 'hacker-man',
        emoji: '🤖',
        emojiKey: 'robot_face',
        description:
            'If opponents TECHNOLOGY row >10, crash laptop of devs in that row with highest value, removing them from the field.',
    },
    PAIR_PROGRAMMING: {
        name: 'pair-programming',
        emoji: '🤝',
        emojiKey: 'handshake', // shaking_hands
        description: 'Double the values of all team members in this row who also have the PAIR_PROGRAMMING effect',
    },
    QUICK_LEARNER: {
        name: 'quick-learner',
        emoji: '👾',
        emojiKey: 'space_invader',
        description: 'Add +1 to this card for all team members in this row',
    },
    INSPIRATION_BOOST: {
        name: 'inspiration-boost',
        emoji: '💡',
        emojiKey: 'bulb',
        description: 'Add +1 to this card at the end of every turn until the round is finished',
    },
    PROTOTYPING: {
        name: 'prototyping',
        emoji: '🎛',
        emojiKey: 'control_knobs',
        description: 'Gain +1 for all JS & FE cards & add +1 to all JS & FE cards on your side of the field',
    },
    CLIENT_BRIEFING: {
        name: 'client-briefing',
        emoji: '💁‍♂️',
        emojiKey: 'information_desk_person',
        description: "Play card on opponent's side of field, but draw 2 cards from your deck to your hand",
    },
    ONLINE_MARKETING: {
        name: 'online-marketing',
        emoji: '📈',
        emojiKey: 'chart_with_upwards_trend',
        description: 'Gain +1 for every PM card & add +1 to every PM on your side of the field',
    },
    PLANNING: {
        name: 'planning',
        emoji: '📅',
        emojiKey: 'calendar',
        description: "Revive a player card from the 'Out of Office' / graveyard stack",
    },
    // -- Special Card Effects --
    PLATINUM_CARD: {
        name: 'platinum-card',
        emoji: '🌟',
        emojiKey: 'star2',
        description: 'Locks card at base value x2. Immune to any negative OR positive effects. Awarded rarely.',
    },
});

/* --- Teams & Roles ------------------------------------------------------------------------------ */

const ROLES = Object.freeze({
    BACK_END: {
        teamID: 'be',
        title: 'PHP developer',
        allowedRows: ['technology'],
        possibleEffects: ['quick-learner', 'hacker-man', 'pair-programming'],
    },
    JAVASCRIPT: {
        teamID: 'js',
        title: 'Javascript developer',
        allowedRows: ['technology'],
        possibleEffects: ['quick-learner', 'hacker-man', 'pair-programming'],
    },
    FRONT_END: {
        teamID: 'fe',
        title: 'Front-End developer',
        allowedRows: ['technology', 'design'],
        possibleEffects: ['quick-learner', 'prototyping', 'pair-programming'],
    },
    UX_DESIGN: {
        teamID: 'ux',
        title: 'User experience designer',
        allowedRows: ['design', 'business'],
        possibleEffects: ['quick-learner', 'inspiration-boost', 'prototyping'],
    },
    MARKETING_MANAGER: {
        teamID: 'mm',
        title: 'Online Marketing Manager',
        allowedRows: ['business'],
        possibleEffects: ['client-briefing', 'inspiration-boost', 'online-marketing'],
    },
    OFFICE_MANAGER: {
        teamID: 'om',
        title: 'Office Manager',
        allowedRows: ['business'],
        possibleEffects: ['office-manager'],
    },
    PROJECT_MANAGER: {
        teamID: 'pm',
        title: 'Project Manager',
        allowedRows: ['business'],
        possibleEffects: ['planning', 'client-briefing'],
    },
});

/* --- People of Marlon ------------------------------------------------------------------------------ */

const cardsData = Object.freeze({
    bart: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Bart Van Canegem',
        title: 'Javascript Teamlead',
        possibleEffects: [...ROLES.JAVASCRIPT.possibleEffects, 'teamlead'],
    },
    brechtB: {
        ...ROLES.BACK_END,
        fullName: 'Brecht Bonte',
    },
    brechtDR: {
        ...ROLES.FRONT_END,
        fullName: 'Brecht De Ruyte',
    },
    brian: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Brian Roels',
    },
    davy: {
        ...ROLES.FRONT_END,
        fullName: 'Davy ...',
        title: 'Front-End Teamlead',
        possibleEffects: [...ROLES.FRONT_END.possibleEffects, 'teamlead'],
    },
    dieter: {
        ...ROLES.BACK_END,
        fullName: 'Dieter Provoost',
        title: 'PHP Teamlead',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'teamlead'],
    },
    elke: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Elke ...',
    },
    frederikC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Frederik Claerhout',
    },
    frederikDP: {
        ...ROLES.BACK_END,
        fullName: 'Frederik De Paepe',
    },
    gerda: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Gerda Cobbaert',
    },
    gert: {
        ...ROLES.UX_DESIGN,
        fullName: 'Gert ...',
    },
    jeroen: {
        ...ROLES.BACK_END,
        fullName: 'Jeroen Deviaene',
    },
    lien: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Lien Vermassen',
    },
    lisette: {
        ...ROLES.FRONT_END,
        fullName: 'Lisette ...',
    },
    manuel: {
        ...ROLES.BACK_END,
        fullName: 'Manuel Heye',
    },
    mathieu: {
        ...ROLES.BACK_END,
        fullName: 'Mathieu ...',
    },
    nico: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Nico Verkest',
    },
    niels: {
        ...ROLES.UX_DESIGN,
        fullName: 'Niels De Paepe',
        allowedRows: ['design'],
    },
    marieke: {
        ...ROLES.OFFICE_MANAGER,
        fullName: 'Marieke ...',
        isOutOfoffice: true,
    },
    olga: {
        ...ROLES.UX_DESIGN,
        fullName: 'Olga ...',
    },
    robin: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Robin ...',
    },
    rubenC: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Colpaert',
    },
    rubenH: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Haegeman',
    },
    sebastian: {
        ...ROLES.FRONT_END,
        fullName: 'Sebastian Viaene',
    },
    sofie: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Sofie ...',
    },
    thomasC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Thomas Crepain',
    },
    thomasML: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thomas MacLean',
        isOutOfoffice: true,
    },
    thorr: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thorr Stevens',
        companyRole: 'Fratello serverside rendering',
        summary: `
            React hooks of componenten\n
            React Native apps\n
            Node & JavaScript\n
            Marvel films\n
            thunder & lightning
        `,
    },
    tina: {
        ...ROLES.MARKETING_MANAGER,
        fullName: 'Tina ...',
    },
    tuur: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Tuur Lievens',
    },
    veerle: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Veerle ...',
    },
    vincent: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Vincent Mouton',
    },
});
