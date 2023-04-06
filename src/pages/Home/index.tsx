import * as Styled from './styled'

import UserInfo      from '../../components/UserInfo'
import UserDashboard from '../../components/UserDashboard'
import GithubLogo    from '../../components/GithubLogo'

export default function Home() {
    return (
       <Styled.Container>
            <Styled.Header>
              <GithubLogo />
            </Styled.Header>
            <Styled.GridUserProfile>
                <UserInfo />
                <UserDashboard />
            </Styled.GridUserProfile>
       </Styled.Container>
    )
}