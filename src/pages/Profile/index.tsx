import * as Styled      from './styled'
import GithubLogo       from '../../components/GithubLogo'
import UserInfo         from '../../components/UserInfo'
import UserRepositories from '../../components/UserRepositories'

/**
 * Página Perfil da aplicação.
 */
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