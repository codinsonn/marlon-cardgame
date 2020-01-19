/* --- Types ------------------------------------------------------------------------------ */

export type MarlonEffectType = {
    name: string;
    emoji: string;
    emojiKey: string;
    title: string;
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
        title: 'Remote Work',
        description: 'Return any player card\non your side of the field\nback to your hand',
        isCard: true,
    },
    recruited: {
        name: 'recruited',
        emoji: '👋',
        emojiKey: 'wave',
        title: 'Recruited',
        description: 'Remove all cards with\nthe highest value from both\nsides of the field',
        isCard: true,
    },
    'pizza-time': {
        name: 'pizza-time',
        emoji: '🍕',
        emojiKey: 'pizza',
        title: 'Pizza Time',
        description: 'Double the values of\nall cards on a row of choice',
        isCard: true,
    },
    'wifi-down': {
        name: 'wifi-down',
        emoji: '🙅‍♂️',
        emojiKey: 'no_good_man',
        title: 'Wifi Down',
        description: 'Reduce the base values\nof all cards in the technology row\nto 1 on both sides of the field',
        isCard: true,
    },
    'licence-expired': {
        name: 'licence-expired',
        emoji: '🔐',
        emojiKey: 'closed_lock_with_key',
        title: 'Licence Expired',
        description: 'Reduce the base values\nof all cards in the DESIGN row\nto 1 on both sides of the field',
        isCard: true,
    },
    'low-budget': {
        name: 'low-budget',
        emoji: '📉',
        emojiKey: 'chart_with_downwards_trend',
        title: 'Low Budget',
        description: 'Reduce the base values\nof all cards in the business row\nto 1 on both sides of the field',
        isCard: true,
    },
    'office-management': {
        name: 'office-management',
        emoji: '🛠',
        emojiKey: 'hammer_and_wrench',
        title: 'Office Management',
        description: 'Remove all wifi down,\nlicence expired and low budget effects',
        isCard: true,
    },
    // -- Player Card Effects --
    'office-manager': {
        name: 'office-manager',
        emoji: '🛠',
        emojiKey: 'hammer_and_wrench',
        title: 'Office Manager',
        description: 'Spawn an office management row effect,\nclearing all wifi down,\nlicence expired & low budget',
    },
    'name-collector': {
        name: 'name-collector',
        emoji: '👥',
        emojiKey: 'busts_in_silhouette',
        title: 'Name Collector',
        description:
            'Double the values of all cards on\nyour side that share the same name\n(cumulative, incl. copies of this card)',
    },
    'team-lead': {
        name: 'team-lead',
        emoji: '🧙‍♂️',
        emojiKey: 'mage',
        title: 'Team Lead',
        description: 'Add +3 to all junior\n& +1 to all medior/senior marloni\nof this cards team',
    },
    'hacker-man': {
        name: 'hacker-man',
        emoji: '🤖',
        emojiKey: 'robot_face',
        title: 'Hacker Man',
        description:
            'If opponents technology row >10,\ncrash laptop of highest value devs in\nthat row, removing them from the field.',
    },
    'pair-programming': {
        name: 'pair-programming',
        emoji: '🤝',
        emojiKey: 'handshake',
        title: 'Pair Programming',
        description: 'Double the values of all team members\nin this row who also have\nthe pair programming effect',
    },
    'quick-learner': {
        name: 'quick-learner',
        emoji: '👾',
        emojiKey: 'space_invader',
        title: 'Quick Learner',
        description: 'Add +1 to this card for\nall team members in this row',
    },
    'inspiration-boost': {
        name: 'inspiration-boost',
        emoji: '💡',
        emojiKey: 'bulb',
        title: 'Inspiration Boost',
        description: 'Add +1 to this card\nat the end of every turn\nuntil the round is finished',
    },
    prototyping: {
        name: 'prototyping',
        emoji: '🎛',
        emojiKey: 'control_knobs',
        title: 'Prototyping',
        description: 'Gain +1 for all JS & FE cards\n& add +1 to all JS & FE cards\non your side of the field',
    },
    consultancy: {
        name: 'consultancy',
        emoji: '💁‍♂️',
        emojiKey: 'information_desk_person',
        title: 'Consultancy',
        description: "Play card on opponent's side of field,\nbut draw 2 cards from your deck\nto your hand",
    },
    'online-marketing': {
        name: 'online-marketing',
        emoji: '📈',
        emojiKey: 'chart_with_upwards_trend',
        title: 'Online Marketing',
        description: 'Gain +1 for every PM card\n& add +1 to every PM on your side of the field',
    },
    planning: {
        name: 'planning',
        emoji: '📅',
        emojiKey: 'calendar',
        title: 'Plannings Meeting',
        description: "Revive a player card from\nthe 'Out of Office' / graveyard stack",
    },
    // -- Special Card Effects --
    'platinum-card': {
        name: 'platinum-card',
        emoji: '🌟',
        emojiKey: 'star2',
        title: 'Platinum Card',
        description: 'Locks card at base value x2.\nImmune to any negative OR\npositive effects.',
    },
});

/* --- Export Card Effects ------------------------------------------------------------------------------ */

export default marlonEffects;
