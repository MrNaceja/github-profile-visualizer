import { DefaultTheme } from 'styled-components'
import { Theme } from '../styles/Theme'

declare module 'styled-components' {
    type TTheme = typeof Theme
    export interface DefaultTheme extends TTheme {}
}