import styled                               from "styled-components";
import {ReactComponent as GitHubAvatarLogo} from '../../assets/github-mark/github-mark.svg'
import { AnimPopUpOpacity }                 from "../../styles/Animations";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 1rem;
`

export const LoadingHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const LoadingLogo = styled(GitHubAvatarLogo)`
    fill: ${props => props.theme.GRAY_800};
    -webkit-animation: ${AnimPopUpOpacity} 1s infinite alternate;
    -moz-animation: ${AnimPopUpOpacity} 1s infinite alternate;
    -o-animation: ${AnimPopUpOpacity} 1s infinite alternate;
    -ms-animation: ${AnimPopUpOpacity} 1s infinite alternate;
    animation: ${AnimPopUpOpacity} 1s infinite alternate;
`

export const LoadingMessage = styled.h1`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme.GRAY_300};
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`