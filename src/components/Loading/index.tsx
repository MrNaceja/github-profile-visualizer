import * as Styled from './styled'

import LogoMagazord from '../../assets/logo-magazord.png'

export default function Loading({ message } : { message: string }) {
    return (
        <Styled.Container>
            <Styled.LoadingHeader>
                <Styled.LoadingLogo />
                <Styled.LoadingMessage>{message}</Styled.LoadingMessage>
            </Styled.LoadingHeader>
            <Styled.LoadingFooter>
                <Styled.LoadingFrom />
                <Styled.LogoMagazord src={LogoMagazord}/>
            </Styled.LoadingFooter>
        </Styled.Container>
    )
}