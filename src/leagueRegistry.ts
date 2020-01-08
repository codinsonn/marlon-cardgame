/* --- Marlon League ------------------------------------------------------------------------------ */

// Icons
export { default as InfoIcon } from './MarlonLeague/Icons/InfoIcon';

// Illustrations
export { default as BusinessIllustration } from './MarlonLeague/Illustrations/BusinessIllustration';
export { default as DesignIllustration } from './MarlonLeague/Illustrations/DesignIllustration';
export { default as TechnologyIllustration } from './MarlonLeague/Illustrations/TechnologyIllustration';

// Cards
import MarlonPlayableCard from './MarlonLeague/Cards/PlayableCard';
import MarlonInspectableCard from './MarlonLeague/Cards/InspectableCard';

// Screens
import MarlonGameScreen from './MarlonLeague/Screens/GameScreen';

// Config
import marlonCharacters from './MarlonLeague/Config/marlonCharacters';
import marlonEffects from './MarlonLeague/Config/marlonEffects';
import marlonRows from './MarlonLeague/Config/marlonRows';
import marlonCards from './MarlonLeague/Config/marlonCards';
import marlonImages from './MarlonLeague/Config/marlonImages';

/* --- Register Leagues ----------------------------------------------------------------------- */

const leagueRegistry = {
    marlon: {
        leagueID: 'marlon',
        leagueTitle: 'Marlon League',
        leagueDescription: `
            Marlon combines Business, Design & Technology into solid results.
            So play your People of Marlon cards into these rows to get the upper hand.
        `,
        config: {
            characters: marlonCharacters,
            effects: marlonEffects,
            rows: marlonRows,
        },
        images: marlonImages,
        collectableCards: marlonCards,
        components: {
            GameScreen: MarlonGameScreen,
            PlayableCard: MarlonPlayableCard,
            InspectableCard: MarlonInspectableCard,
        },
    },
};

/* --- Export League Registry ------------------------------------------------------------------- */

export default leagueRegistry;
