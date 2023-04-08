import * as Styled from './styled'

import UserInfo      from '../../components/UserInfo'
import UserRepositories from '../../components/UserRepositories'
import GithubLogo    from '../../components/GithubLogo'

export default function Profile() {
    return (
      <Styled.Container>
        <Styled.Header>
          <GithubLogo />
        </Styled.Header>
        <Styled.GridUserProfile>
          <UserInfo/>
          <UserRepositories />
        </Styled.GridUserProfile>
      </Styled.Container>
    )
}