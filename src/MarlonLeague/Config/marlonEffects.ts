/* --- Types ------------------------------------------------------------------------------ */

export type MarlonEffectType = {
    name: string;
    emoji: string;
    emojiKey: string;
    description: string;
};

export type MarlonEffectsType = { [key: string]: MarlonEffectType };

/* --- Card Effects ------------------------------------------------------------------------------ */

const marlonEffects: MarlonEffectsType = Object.freeze({
    // -- Row & Special Effect Cards --
    'remote-work': {
        name: 'remote-work',
        emoji: '🏡',
        emojiKey: 'house_with_garden',
        description: 'Return any player card on your side of the field back to your hand',
        isCard: true,
    },
    recruited: {
        name: 'recruited',
        emoji: '👋',
        emojiKey: 'wave',
        description: 'Remove all cards with the highest value from both sides of the field',
        isCard: true,
    },
    'pizza-time': {
        name: 'pizza-time',
        emoji: '🍕',
        emojiKey: 'pizza',
        description: 'Double the values of all cards on a row of choice',
        isCard: true,
    },
    'wifi-down': {
        name: 'wifi-down',
        emoji: '🙅‍♂️',
        emojiKey: 'no_good_man',
        description: 'Reduce the base values of all cards in the TECHNOLOGY row to 1 on both sides of the field',
        isCard: true,
    },
    'licence-expired': {
        name: 'licence-expired',
        emoji: '🔐',
        emojiKey: 'closed_lock_with_key',
        description: 'Reduce the base values of all cards in the DESIGN row to 1 on both sides of the field',
        isCard: true,
    },
    'low-budget': {
        name: 'low-budget',
        emoji: '📉',
        emojiKey: 'chart_with_downwards_trend',
        description: 'Reduce the base values of all cards in the BUSINESS row to 1 on both sides of the field',
        isCard: true,
    },
    'office-management': {
        name: 'office-management',
        emoji: '🛠',
        emojiKey: 'hammer_and_wrench',
        description: 'Remove all WIFI_DOWN, LICENCE_EXPIRED and LOW_BUDGET effects',
        isCard: true,
    },
    // -- Player Card Effects --
    'office-manager': {
        name: 'office-manager',
        emoji: '🛠',
        emojiKey: 'hammer_and_wrench',
        description: 'Spawn an OFFICE_MANAGEMENT row effect, clearing all WIFI_DOWN, LICENCE_EXPIRED & LOW_BUDGET',
    },
    'name-collector': {
        name: 'name-collector',
        emoji: '👥',
        emojiKey: 'busts_in_silhouette',
        description:
            'Double the values of all cards on your side that share the same name (cumulative, incl. copies of this card)',
    },
    'team-lead': {
        name: 'team-lead',
        emoji: '🧙‍♂️',
        emojiKey: 'mage',
        description: 'Add +3 to all junior & +1 to all medior/senior marloni of this cards team',
    },
    'hacker-man': {
        name: 'hacker-man',
        emoji: '🤖',
        emojiKey: 'robot_face',
        description:
            'If opponents TECHNOLOGY row >10, crash laptop of devs in that row with highest value, removing them from the field.',
    },
    'pair-programming': {
        name: 'pair-programming',
        emoji: '🤝',
        emojiKey: 'handshake',
        description: 'Double the values of all team members in this row who also have the PAIR_PROGRAMMING effect',
    },
    'quick-learner': {
        name: 'quick-learner',
        emoji: '👾',
        emojiKey: 'space_invader',
        description: 'Add +1 to this card for all team members in this row',
    },
    'inspiration-boost': {
        name: 'inspiration-boost',
        emoji: '💡',
        emojiKey: 'bulb',
        description: 'Add +1 to this card at the end of every turn until the round is finished',
    },
    prototyping: {
        name: 'prototyping',
        emoji: '🎛',
        emojiKey: 'control_knobs',
        description: 'Gain +1 for all JS & FE cards & add +1 to all JS & FE cards on your side of the field',
    },
    consultancy: {
        name: 'consultancy',
        emoji: '💁‍♂️',
        emojiKey: 'information_desk_person',
        description: "Play card on opponent's side of field, but draw 2 cards from your deck to your hand",
    },
    'online-marketing': {
        name: 'online-marketing',
        emoji: '📈',
        emojiKey: 'chart_with_upwards_trend',
        description: 'Gain +1 for every PM card & add +1 to every PM on your side of the field',
    },
    planning: {
        name: 'planning',
        emoji: '📅',
        emojiKey: 'calendar',
        description: "Revive a player card from the 'Out of Office' / graveyard stack",
    },
    // -- Special Card Effects --
    'platinum-card': {
        name: 'platinum-card',
        emoji: '🌟',
        emojiKey: 'star2',
        description: 'Locks card at base value x2. Immune to any negative OR positive effects. Awarded rarely.',
    },
});

/* --- Export Card Effects ------------------------------------------------------------------------------ */

export default marlonEffects;
