/**
 * Retorna um número randomizado conforme intervalo.
 *  
 * @param max 
 * @param min 
 * @returns number
 */
export default function randomNumberInRange(max : number, min : number = 0) : number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}