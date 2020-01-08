/* --- Card Rows ------------------------------------------------------------------------------ */

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

/* --- Export Card Rows ------------------------------------------------------------------------------ */

export default ROWS;
