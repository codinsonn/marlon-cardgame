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
    nico: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Nico Verkest',
        startDate: '01/01/2015',
        companyRole: 'JavaScript',
        summary: `
            React & React-Native\n
            2D game engines\n
            moestuinieren\n
            WebGL
        `,
    },
    brian: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Brian Roels',
        startDate: '01/01/2019',
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
    robin: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Robin Kossi',
        startDate: '01/01/2017',
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
    thorr: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thorr Stevens',
        startDate: '01/01/2018',
        companyRole: 'Fratello serverside rendering',
        summary: `
            React hooks of componenten\n
            React Native apps\n
            Node & JavaScript\n
            Marvel films\n
            thunder & lightning
        `,
    },
    tuur: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Tuur Lievens',
        startDate: '01/01/2019',
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
    thomasML: {
        ...ROLES.JAVASCRIPT,
        fullName: 'Thomas MacLean',
        startDate: '01/01/2018',
        isOutOfoffice: true,
        possibleEffects: [...ROLES.JAVASCRIPT.possibleEffects, 'name-collector'],
        companyRole: 'JavaScript/Node',
        summary: `
            Vue\n
            Svelte\n
            honden
        `,
    },
    // --- PHP Team ---
    dieter: {
        ...ROLES.BACK_END,
        fullName: 'Dieter Provoost',
        title: 'Team Lead PHP',
        startDate: '01/01/2012',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'team-lead'],
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
    brechtB: {
        ...ROLES.BACK_END,
        fullName: 'Brecht Bonte',
        startDate: '01/01/2011',
        companyRole: 'Fratello gerelateerde backend zaken',
        summary: `
            PHPtorm pro-tips™️\n
            Karate\n
            Wing Chun\n
            hoe je een hond\n
            niet moet opvoeden
        `,
    },
    frederikDP: {
        ...ROLES.BACK_END,
        fullName: 'Frederik De Paepe',
        startDate: '01/01/2010',
        companyRole: 'ontwikkeling in PHP',
        summary: `
            Fratello CMS\n
            Rusland en de Russische taal\n
            Node & JavaScript\n
            (koers)fietsen
        `,
    },
    manuel: {
        ...ROLES.BACK_END,
        fullName: 'Manuel Heye',
        startDate: '01/01/2016',
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
        startDate: '01/01/2012',
        companyRole: 'Daikin, VDAB, PHP',
        summary: `
            security\n
            pentesting\n
            Inspirational quotes\n
            Apex Legends
        `,
    },
    rubenC: {
        ...ROLES.BACK_END,
        fullName: 'Ruben Colpaert',
        startDate: '01/01/2019',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'name-collector'],
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
        startDate: '01/01/2016',
        possibleEffects: [...ROLES.BACK_END.possibleEffects, 'name-collector'],
        companyRole: 'vragen over PHP',
        summary: `
            MySql\n
            scouts(kampen)\n
            Light themes
        `,
    },
    // --- Front-End Team ---
    davy: {
        ...ROLES.FRONT_END,
        fullName: 'Davy ...',
        title: 'Team Lead Front-End',
        startDate: '01/01/2008',
        possibleEffects: [...ROLES.FRONT_END.possibleEffects, 'consultancy', 'team-lead'],
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
    brechtDR: {
        ...ROLES.FRONT_END,
        fullName: 'Brecht De Ruyte',
        startDate: '01/01/2016',
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
    lisette: {
        ...ROLES.FRONT_END,
        fullName: 'Lisette Mazure',
        startDate: '01/01/2019',
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
    sebastian: {
        ...ROLES.FRONT_END,
        fullName: 'Sebastian Viaene',
        startDate: '01/01/2014',
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
    // --- UX Design Team ---
    gert: {
        ...ROLES.UX_DESIGN,
        fullName: 'Gert Dedeyne',
        title: 'Team Lead Design',
        startDate: '01/01/2011',
        possibleEffects: [...ROLES.UX_DESIGN.possibleEffects, 'team-lead'],
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
    niels: {
        ...ROLES.UX_DESIGN,
        fullName: 'Niels De Paepe',
        allowedRows: ['design'],
        title: 'Designer',
        startDate: '01/01/2015',
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
    olga: {
        ...ROLES.UX_DESIGN,
        fullName: 'Olga Maertens',
        title: 'Analyst',
        startDate: '01/01/2019',
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
    // --- Project Management Team ---
    frederikC: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Frederik Claerhout',
        startDate: '01/01/2008',
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
    elke: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Elke De Vleeschouwer',
        startDate: '01/01/2012',
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
    gerda: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Gerda Cobbaert',
        startDate: '01/01/2018',
        companyRole: 'Daikin & Dockx Rental',
        summary: `
            great coffee\n
            nice places to visit\n
            ideas on how not to grow plants\n
            IKEA knowledge
        `,
    },
    lien: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Lien Vermassen',
        startDate: '01/01/2015',
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
    sofie: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Sofie Verschraegen',
        startDate: '01/01/2019',
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
        startDate: '01/01/2015',
        possibleEffects: [...ROLES.PROJECT_MANAGER.possibleEffects, 'name-collector'],
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
    veerle: {
        ...ROLES.PROJECT_MANAGER,
        fullName: 'Veerle Van den Bulcke',
        startDate: '01/01/2018',
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
        startDate: '01/01/2008',
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
    // --- Other ---
    marieke: {
        ...ROLES.OFFICE_MANAGER,
        fullName: 'Marieke Vanderghote',
        startDate: '01/01/2017',
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
    tina: {
        ...ROLES.MARKETING_MANAGER,
        fullName: 'Tina Van der Heyden',
        startDate: '01/01/2019',
        companyRole: 'de cijfers achter een website',
        summary: `
            copywriting\n
            SEO/SEA\n
            social media campagnes\n
            cosplay\n
            snail mail
        `,
    },
});

/* --- Export Marlon League Characters ----------------------------------------------------------------- */

export default marlonCharacters;
