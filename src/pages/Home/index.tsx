import * as Styled from './styled'

import GitHubLogo from '../../assets/github-mark/GitHub_Logo_White.png'
import GitHubAvatarLogo from '../../assets/github-mark/github-mark-white.svg'
import Profile from '../../components/Profile'
import TabDashboard from '../../components/TabDashboard'

export default function Home() {
    return (
       <Styled.Container>
            <Styled.Header>
                <Styled.Logo >
                    <img src={GitHubAvatarLogo} alt="GitHub Avatar" />
                    <img src={GitHubLogo}       alt="GitHub" />
                    <span>/</span>
                    <h1>Eduardo Toriani</h1>
                </Styled.Logo>
            </Styled.Header>
            <Styled.GridProfileDashboard>
                <Profile />
                <TabDashboard />
            </Styled.GridProfileDashboard>
       </Styled.Container>
    )
}