/**
 * Retorna um número randomizado conforme intervalo.
 */
export default function randomNumberInRange(max : number, min : number = 0) : number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}