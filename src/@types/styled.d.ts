import { DefaultTheme } from 'styled-components'
import { Theme } from '../styles/Theme'

/**
 * Definindo para o styled-components qual o tipo do tema no qual a aplicação está utilizando.
 */
declare module 'styled-components' {
    type TTheme = typeof Theme
    export interface DefaultTheme extends TTheme {}
}