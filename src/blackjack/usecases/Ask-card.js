import _ from 'underscore'

// Esta función me permite tomar una carta
/**
 * takes a card from the deck
 * @param {Array<string>} deck  baraja de cartas
 * @returns carta extraida de la baraja
 */
export const pedirCarta = (deck ) => {

    if ( !deck||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}