# Marlon Cardgame

## Running Locally

Download a copy of the repo to your device with git / github.

```bash
expo install
expo start -w
```

## Rules & How to play

The playable Marlon card game will be loosely based on [Gwent](https://www.playgwent.com/en/join).

-   Each player builds their deck around a Project Leader and a chosen Project.
-   The people of marlon cards in your deck can have different base values based on seniority and the chosen PM or Project.
-   Each deck must contain a minimum of 20 and maximum 30 People of Marlon cards.
-   Each deck can contain the same people of marlon cards with a different special effect.
-   Each deck can only have a maximum of 8 special effect cards (multipliers, decreasers, ...)
-   Each player has 3 rows to put cards in: Business, Design or Technology.
-   Special effect cards can effect the card strength of a row or team negatively or positively.
-   Some People of Marlon cards have effects that can spawn a special row effect (as described above).
-   Some People of Marlon cards have effects that can boost other People of Marlon cards of the same or any row.
-   Some People of Marlon cards have effects that allow you to draw 2 more cards from your deck.
-   Each player draws 10 cards at the start of the game.
-   Each player can play only one card from their hand (effect or person) per turn.
-   Each player has the option to forfeit the round and save their cards for the next round.
-   Each round ends when both players have stopped playing cards.
-   When you've won a round, you draw an additional card.
-   The total card strength for all rows determines the winner of that round.
-   The goal of the game is to be the first to win 2 rounds.

If all of this seems confusing at first, remember that the marlon cardgame will be a Web and Mobile app. Much of this will therefore be figured out by the app and effects and how eveything works will become clear after just a few rounds of play.

### How the app determines base card strength

As with all cardgames, to make things interesting cards will need to have values, next to effects. Here's how the app will determine the base strength of People of Marlon cards, regardless of deck / leader:

-   1 starting base strength for all all People of Marlon cards, which can be increased by the following factors 👇
-   +1 if you're the person in the picture.
-   +1 for all "Junior Marloni" who've worked at Marlon for less than 1 year.
-   +2 for all "Medior Marloni" who've worked at Marlon for 1 - 5 years.
-   +3 for all "Senior Marloni" who've worked at Marlon for more than 5 years.
-   +1 for all People of Marlon whose online game rank is 10th to 6th.
-   +2 for all People of Marlon whose online game rank is 5th to 2nd.
-   +3 for all People of Marlon whose online game rank is 1st.
-   -1 to all People of Marlon cards with a multiplier effect.

When you build your deck around a PM and a chosen project, the following additions apply:

-   +1 value to all People of Marlon cards who've worked with the PM you've chosen as your leader card.
-   +1 additional value to all People of Marlon cards who've worked on the project you've chosen.

### Making it interesting with Special Effects

The following effects are cards that can be played by themselves, and have no people of marlon cards attached to them:

-   REMOTE_WORK: Return any player card on your side of the field back to your hand.
-   RECRUITED: Remove all cards with thehighest value from both sides of the field.
-   PIZZA_TIME: Double the values of all cards on a row of choice.
-   WIFI_DOWN: Reduce the base values of all cardsin the TECHNOLOGY row to 1 on both sides of the field.
-   LICENCE_EXPIRED: Reduce the base values of allcards in the DESIGN row to 1 on both sides of the field.
-   LOW_BUDGET: Reduce the base values of allcards in the BUSINESS row to 1 on both sides ofthe field.
-   OFFICE_MANAGEMENT: Remove all WIFI_DOWN, LICENCE_EXPIRED and LOW_BUDGET effects.

Next to those, all People of Marlon cards also have versions of that card with an effect. These effects are meant to be used in combo with others cards:

-   OFFICE_MANAGER: Spawn an OFFICE_MANAGEMENT row effect, clearing all WIFI_DOWN, LICENCE_EXPIRED & LOW_BUDGET effects.
-   NAME_COLLECTOR: Double the values of all cards on your side that share the same name (cumulative, incl. copies of this card).
-   TEAM_LEAD: Add +3 to all junior & +1 to all medior/senior marloni of this cards team.
-   HACKER_MAN: If opponents TECHNOLOGY row >10, crash laptop of devs in that row with highest value, removing them from the field.
-   PAIR_PROGRAMMING: Double the values of all team members in this row who also have the PAIR_PROGRAMMING effect.
-   QUICK_LEARNER: Add +1 to this card for all team members in this row.
-   INSPIRATION_BOOST: Add +1 to this card at the end of every turn until the round is finished,
-   PROTOTYPING: Add +1 to all JS & FE cards on your side of the field.
-   CLIENT_BRIEFING: Play card on opponents side of field, but draw 2 cards from your deck to your hand.
-   PLANNING: Revive a player card from the "Out of Office" / graveyard stack.

The final People of Marlon effect is the Platinum effect:

-   PLATINUM: Locks card at double base value. Immune to all negative and positive effects. These card are rare and have a special display.
