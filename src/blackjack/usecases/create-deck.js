import _ from 'underscore';



/**
 *  esta funcion crea un nuevo deck
 * @param {Array <string>} tiposDeCarta  tipos de cartas numericas
 * @param {Array<string>} tiposEspeciales  tipos de cartas especiales
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
    if(!tiposDeCarta||tiposDeCarta===0) 
    throw new Error('TiposDeCarta es obligatorio');
   
    let deck= [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
