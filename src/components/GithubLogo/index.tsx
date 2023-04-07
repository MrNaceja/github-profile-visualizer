import * as Styled from './styled'

import GitHubLogo       from '../../assets/github-mark/GitHub_Logo_White.png'
import GitHubAvatarLogo from '../../assets/github-mark/github-mark-white.svg'
import useUser from '../../contexts/ContextUserGithubProvider/hooks/useUser'

export default function GithubLogo() {
    const { name } = useUser()
    return (
        <Styled.LogoContainer >
            <img src={GitHubAvatarLogo} alt="GitHub Avatar" />
            <img src={GitHubLogo}       alt="GitHub"        />
            <span>/</span>
            <h1>{name}</h1>
        </Styled.LogoContainer>
    )
}