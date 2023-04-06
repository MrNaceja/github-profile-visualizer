import * as Styled from './styled'

import GitHubLogo       from '../../assets/github-mark/GitHub_Logo_White.png'
import GitHubAvatarLogo from '../../assets/github-mark/github-mark-white.svg'

export default function GithubLogo() {
    return (
        <Styled.LogoContainer >
            <img src={GitHubAvatarLogo} alt="GitHub Avatar" />
            <img src={GitHubLogo}       alt="GitHub"        />
            <span>/</span>
            <h1>Eduardo Toriani</h1>
        </Styled.LogoContainer>
    )
}