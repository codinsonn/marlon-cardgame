/* --- Types ------------------------------------------------------------------------------ */

export type MarlonRoleType = {
    teamID: 'be' | 'js' | 'fe' | 'ux' | 'mm' | 'om' | 'pm';
    title: string;
    allowedRows: string[];
    possibleEffects: string[];
};

export type MarlonRolesType = { [key: string]: MarlonRoleType };

export type MarlonCharacterType = MarlonRoleType & {
    fullName: string;
    startDate: string;
    companyRole: string;
    summary: string;
    isOutOfOffice?: boolean;
};

export type MarlonCharactersType = { [key: string]: MarlonCharacterType };

/* --- Marlon League: Teams & Roles ------------------------------------------------------------------------------ */

const ROLES: MarlonRolesType = Object.freeze({
    BACK_END: {
        teamID: 'be',
        title: 'PHP developer',
        allowedRows: ['technology'],
        possibleEffects: ['platinum-card', 'quick-learner', 'hacker-man', 'pair-programming'],
    },
    JAVASCRIPT: {
        teamID: 'js',
        title: 'Javascript developer',
        allowedRows: ['technology'],
        possibleEffects: ['platinum-card', 'quick-learner', 'hacker-man', 'pair-programming'],
    },
    FRONT_END: {
        teamID: 'fe',
        title: 'Front-End developer',
        allowedRows: ['technology', 'design'],
        possibleEffects: ['platinum-card', 'quick-learner', 'prototyping', 'pair-programming'],
    },
    UX_DESIGN: {
        teamID: 'ux',
        title: 'User experience designer',
        allowedRows: ['design', 'business'],
        possibleEffects: ['platinum-card', 'quick-learner', 'inspiration-boost', 'prototyping', 'consultancy'],
    },
    MARKETING_MANAGER: {
        teamID: 'mm',
        title: 'Online Marketing Manager',
        allowedRows: ['business'],
        possibleEffects: ['platinum-card', 'consultancy', 'inspiration-boost', 'online-marketing'],
    },
    OFFICE_MANAGER: {
        teamID: 'om',
        title: 'Office Manager',
        allowedRows: ['business'],
        possibleEffects: ['platinum-card', 'office-manager'],
    },
    PROJECT_MANAGER: {
        teamID: 'pm',
        title: 'Project Manager',
        allowedRows: ['business'],
        possibleEffects: ['platinum-card', 'planning', 'consultancy'],
    },
});

/* --- Character Cards: People of Marlon -------------------------------------------------------------------- */

const marlonCharacters: MarlonCharactersType = Object.freeze({
    // --- TODO ---
    /*
    jeroen: {
        ...ROLES.BACK_END,
        fullName: 'Jeroen Deviaene',
    },
    brent: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Brent ...',
    },
    */
    // --- JavaScript Team ---
    bart: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Bart Van Canegem',
        title: 'Team Lead JavaScript',
        possibleEffects: [...ROLES.JAVASCRIPT.possibleEffects, 'team-lead'],
        startDate: '01/01/2009',
        companyRole: 'vragen rond het\nJavaScript eco systeem',
        summary:
            "JS team gerelateerde vragen\noperations stuff (CI, Heroku, ...)\nGIT\nauto's & all things Toyota\ngames & esports\nelektronica (3D printing, Arduino, ...)",
    },
    nico: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Nico Verkest',
        startDate: '01/01/2015',
        companyRole: 'JavaScript',
        summary: 'React & React-Native\n2D game engines\nmoestuinieren\nWebGL',
    },
    brian: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Brian Roels',
        startDate: '01/01/2019',
        companyRole: 'React, UI-implementatie',
        summary:
            'classificatie, objectdetectie\nMachine Learning\nvragen over slagwerk\nska-punk, bigband, jazz\nhardrock & schlagers\naudiogerelateerde zaken\nmobiele apparaten',
    },
    robin: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Robin Kossi',
        startDate: '01/01/2017',
        companyRole: 'JavaScript development\n(React, Node.JS, CI integratie, ...)',
        summary: 'JS typing (TS/Flow)\nWebpack black magic\ntabs > spaces\nOverwatch connoiseur',
    },
    thorr: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thorr Stevens',
        startDate: '01/01/2018',
        companyRole: 'Fratello serverside rendering',
        summary: 'React hooks of componenten\nReact Native apps\nNode & JavaScript\nMarvel films\nthunder & lightning',
    },
    tuur: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Tuur Lievens',
        startDate: '01/01/2019',
        companyRole: 'Toyota retailer &\ncar on display app',
        summary: 'PC hardware\nDIY domotica\nAndroid apps\nVR / AR\nrandom weetjes',
    },
    thomasML: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thomas MacLean',
        startDate: '01/01/2018',
        isOutOfoffice: true,
        possibleEffects: [...ROLES.JAVASCRIPT.possibleEffects, 'name-collector'],
        companyRole: 'JavaScript/Node',
        summary: 'Vue\nSvelte\nhonden',
    },
    // --- PHP Team ---
    dieter: {
        ...ROLES.BACK_END,
        fullName: 'Dieter Provoost',
        title: 'Team Lead PHP',
        startDate: '01/01/2012',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'team-lead'],
        companyRole: 'PHP, serverconfiguratie en webshops',
        summary:
            "iets met 4411 keer parkeren\ntoelichting bij karakter-\nstoornissen van collega's\nsfeerbeheer\nwindsurfen\npasta",
    },
    brechtB: {
        ...ROLES.BACK_END,
        fullName: 'Brecht Bonte',
        startDate: '01/01/2011',
        companyRole: 'Fratello gerelateerde backend zaken',
        summary: 'PHPtorm pro-tips™️\nKarate\nWing Chun\nhoe je een hond\nniet moet opvoeden',
    },
    frederikDP: {
        ...ROLES.BACK_END,
        fullName: 'Frederik De Paepe',
        startDate: '01/01/2010',
        companyRole: 'ontwikkeling in PHP',
        summary: 'Fratello CMS\nRusland en de Russische taal\nNode & JavaScript\n(koers)fietsen',
    },
    manuel: {
        ...ROLES.BACK_END,
        fullName: 'Manuel Heye',
        startDate: '01/01/2016',
        companyRole: 'PHP, Fratello, SMS-parkeren',
        summary: 'cafés in Gent\nfrietjes\nverbouwen met Roger',
    },
    mathieu: {
        ...ROLES.BACK_END,
        fullName: 'Mathieu Duffeler',
        startDate: '01/01/2012',
        companyRole: 'Daikin, VDAB, PHP',
        summary: 'security\npentesting\nInspirational quotes\nApex Legends',
    },
    rubenC: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Colpaert',
        startDate: '01/01/2019',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'name-collector'],
        companyRole: 'PHP-ontwikkeling',
        summary: 'how to be a nood at the company\nRPG en LARP\nboardgam410%@!? cat-typos\nmetal (the music genre)',
    },
    rubenH: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Haegeman',
        startDate: '01/01/2016',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'name-collector'],
        companyRole: 'vragen over PHP',
        summary: 'MySql\nscouts(kampen)\nLight themes',
    },
    // --- Front-End Team ---
    davy: {
        ...ROLES.FRONT_END,
        fullName: 'Davy ...',
        title: 'Team Lead Front-End',
        startDate: '01/01/2008',
        possibleEffects: [...ROLES.FRONT_END.possibleEffects, 'consultancy', 'team-lead'],
        companyRole: 'snelle toegankelijke en kick-ass\nFront-Ends voor je website of app',
        summary:
            'HTML, CSS & JS\ncargofietsen\nwebsite performance\ntechnical SEO & Accessibility\nfotografie & video\nmoestuinieren & ecologisch leven',
    },
    brechtDR: {
        ...ROLES.FRONT_END,
        fullName: 'Brecht De Ruyte',
        startDate: '01/01/2016',
        companyRole: 'vragen in verband met lay-out,\nanimaties, performance,\ntechnische SEO en accessibility',
        summary: 'BBQ\nManga\nJapan\nfotografie\ngames',
    },
    lisette: {
        ...ROLES.FRONT_END,
        fullName: 'Lisette Mazure',
        startDate: '01/01/2019',
        companyRole: 'the exciting side\nof Front-end',
        summary: 'all HTML & CSS things\naccessibility\nDepeche Mode\ntennis\nmake-up',
    },
    sebastian: {
        ...ROLES.FRONT_END,
        fullName: 'Sebastian Viaene',
        startDate: '01/01/2014',
        companyRole: 'Front-End gerelateerde zaken\nzoals HTML, CSS, DOM, ...',
        summary: 'JavaScript\nbrowserskills\nperformantie & toegankelijkheid\nindieweb\nstraatfotografie\nbier',
    },
    // --- UX Design Team ---
    gert: {
        ...ROLES.UX_DESIGN,
        fullName: 'Gert Dedeyne',
        title: 'Team Lead Design',
        startDate: '01/01/2011',
        possibleEffects: [...ROLES.UX_DESIGN.possibleEffects, 'team-lead'],
        companyRole: 'webdesign, prototypes\nen usability',
        summary: 'beestjes groot en klein\ntekenen en knutselen\nelectronica projecten\nrobots',
    },
    niels: {
        ...ROLES.UX_DESIGN,
        fullName: 'Niels De Paepe',
        allowedRows: ['design'],
        title: 'Designer',
        startDate: '01/01/2015',
        companyRole: 'de facade van een website',
        summary:
            'webdesign\ngrafish ontwerp\nHappy Monster Club\nVerkleinen van een logo en\nvergroten (als het echt moet)\npixelneukerij',
    },
    olga: {
        ...ROLES.UX_DESIGN,
        fullName: 'Olga Maertens',
        title: 'Analyst',
        startDate: '01/01/2019',
        companyRole: 'alles over analyse\nen prototypes',
        summary: 'usability\ninformatie-architectuur\njazzpiano\ntriviale taalweetjes',
    },
    // --- Project Management Team ---
    frederikC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Frederik Claerhout',
        startDate: '01/01/2008',
        title: 'CEO',
        companyRole: 'een doordachte aanpak\nvan je digitale business',
        summary:
            'e-commerce trends\nverzamelen van functionele vereisten\nweb app development\ncontinuous testing\nproject management\nKaizen\nde Scoville chart',
    },
    elke: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Elke De Vleeschouwer',
        startDate: '01/01/2012',
        companyRole: 'Toyota gerelateerde vragen',
        summary: 'planning\nproject management\nAgile way of working\nJira\nomnisport\nmindfullness',
    },
    gerda: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Gerda Cobbaert',
        startDate: '01/01/2018',
        companyRole: 'Daikin & Dockx Rental',
        summary: 'great coffee\nnice places to visit\nideas on how not to grow plants\nIKEA knowledge',
    },
    lien: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Lien Vermassen',
        startDate: '01/01/2015',
        companyRole: 'de ins en outs van\nhet Fratello framework',
        summary: 'project management\nroller derby\nrainbows & unicorns\nABBA',
    },
    sofie: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Sofie Verschraegen',
        startDate: '01/01/2019',
        companyRole: 'het in goede banen\nleiden van projecten',
        summary:
            'communicatie en bemiddelen\ntussen Marlon en de klant\ninplannen van developers\nop restaurant gaan\nalternatieve muziekgenres',
    },
    thomasC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Thomas Crepain',
        startDate: '01/01/2015',
        possibleEffects: [...ROLES.PROJECT_MANAGER.possibleEffects, 'name-collector'],
        companyRole: 'de projecten die over parkeren\nof elektriciteit gaan',
        summary: 'planning\ndie *@#$%! filter in Jira\ndat *@#$%! dashboard in Jira\nkoffie\nscouting',
    },
    veerle: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Veerle Van den Bulcke',
        startDate: '01/01/2018',
        companyRole: "alle info over de projecten die\nik in goede banen probeer te leiden,\nmaar vooral voor Daim'kes",
        summary: 'project management\nPadel\npateekes & pralines\npounding techno music',
    },
    vincent: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Vincent Mouton',
        title: 'Happiness Manager',
        startDate: '01/01/2008',
        possibleEffects: [...ROLES.PROJECT_MANAGER.possibleEffects, 'prototyping', 'office-manager'],
        companyRole: 'prototypes, analyses\nen een goed gesprek',
        summary: 'je e-mail en software accounts\nConfluence & Jira\nmijn VISA-kaart\nde Gantoise\nLEGO blokjes zoeken',
    },
    // --- Other ---
    marieke: {
        ...ROLES.OFFICE_MANAGER,
        fullName: 'Marieke Vanderghote',
        startDate: '01/01/2017',
        isOutOfoffice: true,
        companyRole: 'alles (behalve IT\ngerelateerde issues)',
        summary: 'je loon\nhet kopieertoestel\nroze post-its ipv groene\neen kapotte stoel\neen tekort aan koffiebonen',
    },
    tina: {
        ...ROLES.MARKETING_MANAGER,
        fullName: 'Tina Van der Heyden',
        startDate: '01/01/2019',
        companyRole: 'de cijfers achter een website',
        summary: 'copywriting\nSEO/SEA\nsocial media campagnes\ncosplay\nsnail mail',
    },
});

/* --- Export Marlon League Characters ----------------------------------------------------------------- */

export default marlonCharacters;
