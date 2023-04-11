import * as Styled  from './styled'
import LogoMagazord from '../../assets/logo-magazord.png'

interface ILoadingProps {
    /** Mensagem de carregamento */
    message: string
}

/**
 * Componente de tela de carregamento.
 */
export default function Loading({ message } : ILoadingProps) {
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