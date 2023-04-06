import { Buildings, InstagramLogo, MapPin } from 'phosphor-react'
import * as Styled from './styled'

export default function UserInfo() {
    return (
        <Styled.Container>
            <Styled.Avatar>
                <img src="https://github.com/MrNaceja.png"/>
            </Styled.Avatar>
            <Styled.InfoUser>
                <h2>Eduardo Toriani</h2>
                <p>Desenvolvedor apaixonado por front end e design</p>
            </Styled.InfoUser>
            <Styled.InfoLinks>
                <Styled.InfoLink> <Buildings size={16} /> Magazord </Styled.InfoLink>
                <Styled.InfoLink> <MapPin size={16} /> Ibirama - SC </Styled.InfoLink>
                <Styled.InfoLink> <InstagramLogo size={16} /> eduardo.toriani </Styled.InfoLink>
            </Styled.InfoLinks>
        </Styled.Container>
    )
}