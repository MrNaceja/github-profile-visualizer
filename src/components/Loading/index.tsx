import * as Styled from './styled'

export default function Loading({ message } : { message: string }) {
    return (
        <Styled.Container>
            <Styled.LoadingLogo />
            <Styled.LoadingMessage>{message}</Styled.LoadingMessage>
        </Styled.Container>
    )
}