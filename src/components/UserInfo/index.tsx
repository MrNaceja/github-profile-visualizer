import { Buildings, GithubLogo, MapPin } from 'phosphor-react'
import * as Styled from './styled'
import useUser from '../../contexts/ContextUserGithubProvider/hooks/useUser'

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
            <Styled.InfoLinks>
                <Styled.InfoLink> <Buildings size={16} /> {user.company} </Styled.InfoLink>
                <Styled.InfoLink> <MapPin size={16} /> {user.location} </Styled.InfoLink>
                <Styled.InfoLink href={user.githubUrl}> <GithubLogo size={16} /> Ver Github </Styled.InfoLink>
            </Styled.InfoLinks>
        </Styled.Container>
    )
}