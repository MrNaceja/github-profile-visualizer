import styled, { keyframes } from "styled-components";
import {ReactComponent as GitHubAvatarLogo} from '../../assets/github-mark/github-mark.svg'

export const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`

const AnimExpandLogo = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }

`

export const LoadingLogo = styled(GitHubAvatarLogo)`
    fill: ${props => props.theme.GRAY_800};
    -webkit-animation: ${AnimExpandLogo} 2s infinite alternate;
    -moz-animation: ${AnimExpandLogo} 2s infinite alternate;
    -o-animation: ${AnimExpandLogo} 2s infinite alternate;
    -ms-animation: ${AnimExpandLogo} 2s infinite alternate;
    animation: ${AnimExpandLogo} 2s infinite alternate;
`

export const LoadingMessage = styled.h1`
    font-size: 1.2rem;
    color: ${props => props.theme.GRAY_300};

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`