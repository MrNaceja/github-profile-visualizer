import useUser                                      from '../../contexts/ContextUserGithubProvider/hooks/useUser'
import * as Styled                                  from './styled'
import { Buildings, CaretDown, GithubLogo, MapPin } from 'phosphor-react'

/**
 * Componente de Visualização das informações do usuário.
 */
export default function UserInfo() {
    const user = useUser()
    return (
        <Styled.Container>
            <Styled.Avatar>
                <img src={user.avatar}/>
            </Styled.Avatar>
            <Styled.InfoUser>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </Styled.InfoUser>
            <Styled.InfoLinksWrapper>
                <Styled.InfoLinksButtonCollapse >
                    Informações Adicionais <CaretDown size={24} weight="bold"/>
                </Styled.InfoLinksButtonCollapse>
                <Styled.InfoLinks>
                    <Styled.InfoLink> <Buildings size={16} /> {user.company} </Styled.InfoLink>
                    <Styled.InfoLink> <MapPin size={16} /> {user.location} </Styled.InfoLink>
                    <Styled.InfoLink href={user.githubUrl} target='_blank'> <GithubLogo size={16} /> Ver Github </Styled.InfoLink>
                </Styled.InfoLinks>
            </Styled.InfoLinksWrapper>
        </Styled.Container>
    )
}