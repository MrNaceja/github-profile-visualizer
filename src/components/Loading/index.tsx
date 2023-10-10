import * as Styled  from './styled'

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
        </Styled.Container>
    )
}