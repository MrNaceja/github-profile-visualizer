import { useTheme }                         from 'styled-components'
import useUser                              from '../../contexts/ContextUserGithubProvider/hooks/useUser'
import * as Styled                          from './styled'
import {ReactComponent as GitHubAvatarLogo} from '../../assets/github-mark/github-mark-white.svg'
import GitHubLogo                           from '../../assets/github-mark/GitHub_Logo_White.png'

/**
 * Componente de Logotipos do Github, presente no cabeçalho da aplicação.
 */
export default function GithubLogo() {
    const { name : userName } = useUser()
    const theme = useTheme()
    return (
        <Styled.LogoContainer >
            <GitHubAvatarLogo height={24} fill={theme.GRAY_100}/>
            <img src={GitHubLogo} alt="GitHub" />
            <span>/</span>
            <h1>{userName}</h1>
        </Styled.LogoContainer>
    )
}