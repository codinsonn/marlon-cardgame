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
        title: 'Team Lead JavaScript',
        possibleEffects: [...ROLES.JAVASCRIPT.possibleEffects, 'teamlead'],
        companyRole: `
            vragen rond het\n
            JavaScript eco systeem
        `,
        summary: `
            JS team gerelateerde vragen\n
            operations stuff (CI, Heroku, ...)\n
            GIT\n
            auto's & all things Toyota\n
            games & esports\n
            elektronica (3D printing, Arduino, ...)
        `,
    },
    brechtB: {
        ...ROLES.BACK_END,
        fullName: 'Brecht Bonte',
        companyRole: 'Fratello gerelateerde backend zaken',
        summary: `
            PHPtorm pro-tips™️\n
            Karate\n
            Wing Chun\n
            hoe je een hond\n
            niet moet opvoeden
        `,
    },
    brechtDR: {
        ...ROLES.FRONT_END,
        fullName: 'Brecht De Ruyte',
        companyRole: `
            vragen in verband met lay-out,\n
            animaties, performance,\n
            technische SEO en accessibility
        `,
        summary: `
            BBQ\n
            Manga\n
            Japan\n
            fotografie\n
            games
        `,
    },
    brian: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Brian Roels',
        companyRole: 'React, UI-implementatie',
        summary: `
            classificatie, objectdetectie\n
            Machine Learning\n
            vragen over slagwerk\n
            ska-punk, bigband, jazz\n
            hardrock & schlagers\n
            audiogerelateerde zaken\n
            mobiele apparaten
        `,
    },
    davy: {
        ...ROLES.FRONT_END,
        fullName: 'Davy ...',
        title: 'Team Lead Front-End',
        possibleEffects: [...ROLES.FRONT_END.possibleEffects, 'teamlead'],
        companyRole: `
            snelle toegankelijke en kick-ass\n
            Front-Ends voor je website of app
        `,
        summary: `
            HTML, CSS & JS\n
            cargofietsen\n
            website performance\n
            technical SEO & Accessibility\n
            fotografie & video\n
            moestuinieren & ecologisch leven
        `,
    },
    dieter: {
        ...ROLES.BACK_END,
        fullName: 'Dieter Provoost',
        title: 'Team Lead PHP',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'teamlead'],
        companyRole: 'PHP, serverconfiguratie en webshops',
        summary: `
            iets met 4411 keer parkeren\n
            toelichting bij karakter-\n
            stoornissen van collega's\n
            sfeerbeheer\n
            windsurfen\n
            pasta
        `,
    },
    elke: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Elke De Vleeschouwer',
        companyRole: 'Toyota gerelateerde vragen',
        summary: `
            planning\n
            project management\n
            Agile way of working\n
            Jira\n
            omnisport\n
            mindfullness
        `,
    },
    frederikC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Frederik Claerhout',
        title: 'CEO',
        companyRole: `
            een doordachte aanpak\n
            van je digitale business
        `,
        summary: `
            e-commerce trends\n
            verzamelen van functionele vereisten\n
            web app development\n
            continuous testing\n
            project management\n
            Kaizen\n
            de Scoville chart
        `,
    },
    frederikDP: {
        ...ROLES.BACK_END,
        fullName: 'Frederik De Paepe',
        companyRole: 'ontwikkeling in PHP',
        summary: `
            Fratello CMS\n
            Rusland en de Russische taal\n
            Node & JavaScript\n
            (koers)fietsen
        `,
    },
    gerda: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Gerda Cobbaert',
        companyRole: 'Daikin & Dockx Rental',
        summary: `
            great coffee\n
            nice places to visit\n
            ideas on how not to grow plants\n
            IKEA knowledge
        `,
    },
    gert: {
        ...ROLES.UX_DESIGN,
        fullName: 'Gert Dedeyne',
        title: 'Team Lead Design',
        possibleEffects: [...ROLES.DESIGN.possibleEffects, 'teamlead'],
        companyRole: `
            webdesign, prototypes\n
            en usability
        `,
        summary: `
            beestjes groot en klein\n
            tekenen en knutselen\n
            electronica projecten\n
            robots
        `,
    },
    /*
    jeroen: {
        ...ROLES.BACK_END,
        fullName: 'Jeroen Deviaene',
    },
    */
    lien: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Lien Vermassen',
        companyRole: `
            de ins en outs van\n
            het Fratello framework
        `,
        summary: `
            project management\n
            roller derby\n
            rainbows & unicorns\n
            ABBA
        `,
    },
    lisette: {
        ...ROLES.FRONT_END,
        fullName: 'Lisette Mazure',
        companyRole: `
            the exciting side\n
            of Front-end
        `,
        summary: `
            all HTML & CSS things\n
            accessibility\n
            Depeche Mode\n
            tennis\n
            make-up
        `,
    },
    manuel: {
        ...ROLES.BACK_END,
        fullName: 'Manuel Heye',
        companyRole: 'PHP, Fratello, SMS-parkeren',
        summary: `
            cafés in Gent\n
            frietjes\n
            verbouwen met Roger
        `,
    },
    mathieu: {
        ...ROLES.BACK_END,
        fullName: 'Mathieu Duffeler',
        companyRole: 'Daikin, VDAB, PHP',
        summary: `
            security\n
            pentesting\n
            Inspirational quotes\n
            Apex Legends
        `,
    },
    nico: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Nico Verkest',
        companyRole: 'JavaScript',
        summary: `
            React & React-Native\n
            2D game engines\n
            moestuinieren\n
            WebGL
        `,
    },
    niels: {
        ...ROLES.UX_DESIGN,
        fullName: 'Niels De Paepe',
        allowedRows: ['design'],
        title: 'Designer',
        companyRole: 'de facade van een website',
        summary: `
            webdesign\n
            grafish ontwerp\n
            Happy Monster Club\n
            Verkleinen van een logo en\n
            vergroten (als het echt moet)\n
            pixelneukerij
        `,
    },
    marieke: {
        ...ROLES.OFFICE_MANAGER,
        fullName: 'Marieke Vanderghote',
        isOutOfoffice: true,
        companyRole: `
            alles (behalve IT\n
            gerelateerde issues)
        `,
        summary: `
            je loon\n
            het kopieertoestel\n
            roze post-its ipv groene\n
            een kapotte stoel\n
            een tekort aan koffiebonen
        `,
    },
    olga: {
        ...ROLES.UX_DESIGN,
        fullName: 'Olga Maertens',
        title: 'Analyst',
        companyRole: `
            alles over analyse\n
            en prototypes
        `,
        summary: `
            usability\n
            informatie-architectuur\n
            jazzpiano\n
            triviale taalweetjes
        `,
    },
    robin: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Robin Kossi',
        companyRole: `
            JavaScript development\n
            (React, Node.JS, CI integratie, ...)
        `,
        summary: `
            JS typing (TS/Flow)\n
            Webpack black magic\n
            tabs > spaces\n
            Overwatch connoiseur
        `,
    },
    rubenC: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Colpaert',
        companyRole: 'PHP-ontwikkeling',
        summary: `
            how to be a nood at the company\n
            RPG en LARP\n
            boardgam410%@!? cat-typos\n
            metal (the music genre)
        `,
    },
    rubenH: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Haegeman',
        companyRole: 'vragen over PHP',
        summary: `
            MySql\n
            scouts(kampen)\n
            Light themes
        `,
    },
    sebastian: {
        ...ROLES.FRONT_END,
        fullName: 'Sebastian Viaene',
        companyRole: `
            Front-End gerelateerde zaken\n
            zoals HTML, CSS, DOM, ...
        `,
        summary: `
            JavaScript\n
            browserskills\n
            performantie & toegankelijkheid\n
            indieweb\n
            straatfotografie\n
            bier
        `,
    },
    sofie: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Sofie Verschraegen',
        companyRole: `
            het in goede banen\n
            leiden van projecten
        `,
        summary: `
            communicatie en bemiddelen\n
            tussen Marlon en de klant\n
            inplannen van developers\n
            op restaurant gaan\n
            alternatieve muziekgenres
        `,
    },
    thomasC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Thomas Crepain',
        companyRole: `
            de projecten die over parkeren\n
            of elektriciteit gaan
        `,
        summary: `
            planning\n
            die *@#$%! filter in Jira\n
            dat *@#$%! dashboard in Jira\n
            koffie\n
            scouting
        `,
    },
    thomasML: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thomas MacLean',
        isOutOfoffice: true,
        companyRole: 'JavaScript/Node',
        summary: `
            Vue\n
            Svelte\n
            honden
        `,
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
        fullName: 'Tina Van der Heyden',
        companyRole: 'de cijfers achter een website',
        summary: `
            copywriting\n
            SEO/SEA\n
            social media campagnes\n
            cosplay\n
            snail mail
        `,
    },
    tuur: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Tuur Lievens',
        companyRole: `
            Toyota retailer &\n
            car on display app
        `,
        summary: `
            PC hardware\n
            DIY domotica\n
            Android apps\n
            VR / AR\n
            random weetjes
        `,
    },
    veerle: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Veerle Van den Bulcke',
        companyRole: `
            alle info over de projecten die\n
            ik in goede banen probeer te leiden,\n
            maar vooral voor Daim'kes
        `,
        summary: `
            project management\n
            Padel\n
            pateekes & pralines\n
            pounding techno music
        `,
    },
    vincent: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Vincent Mouton',
        title: 'Happiness Manager',
        possibleEffects: [...ROLES.PROJECT_MANAGER.possibleEffects, 'prototyping', 'office-manager'],
        companyRole: `
            prototypes, analyses\n
            en een goed gesprek
        `,
        summary: `
            je e-mail en software accounts\n
            Confluence & Jira\n
            mijn VISA-kaart\n
            de Gantoise\n
            LEGO blokjes zoeken
        `,
    },
});
