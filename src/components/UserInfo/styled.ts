import styled, { keyframes } from "styled-components";
import * as Collapsible from '@radix-ui/react-collapsible'
import { AnimPopUp } from "../../styles/Animations";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    /** Mobile */
    @media screen and (max-width: 480px) {
        gap: 1rem;
    }
`

export const InfoLinks = styled(Collapsible.Content)`
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    gap:1rem;

    /** A partir de tablets mostra o botão de informações adicionais */
    @media screen and (max-width: 748px) {
        padding: 1rem;
        &[data-state = 'open'] {
            background: ${props => props.theme.GRAY_200}80;
            border-radius: 16px;
        }
    }

`
export const InfoLinksWrapper = styled(Collapsible.Root).attrs(props => ({
    defaultOpen: !window.matchMedia('(max-width:480px)').matches
} as Collapsible.CollapsibleProps))`
    width:100%;
    display: flex;
    flex-direction: column;

    /** Mobile */
    @media screen and (max-width: 480px) {
        margin-top: 1.5rem;
    }
`

export const InfoLinksButtonCollapse = styled(Collapsible.Trigger)`
    all: unset;
    display: none;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.PRIMARY_500};
    transition: .4s;

    svg {
        transition: .2s;
    }

    &[data-state = 'open'] {
        svg {
            transform: rotate(180deg);
        }
    }

    /** A partir de tablets mostra o botão de informações adicionais */
    @media screen and (max-width: 748px) {
        display: flex;
    }
`

export const InfoLink = styled.a`
    color: ${props => props.theme.PRIMARY_500};
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
    :hover {
        color: ${props => props.theme.PRIMARY_800};
    }
`

export const InfoUser = styled.div`
    text-align: center;
    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.GRAY_800};
        margin-bottom: 0.25rem;
    }
    p {
        color: ${props => props.theme.GRAY_300}
    }
`

export const Avatar = styled.div`
    width:max-content;
    height:max-content;
    position: relative;
    animation: ${AnimPopUp} 1s;

    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }
    ::after {
        height:40px;
        width:40px;
        position: absolute;
        content: '😎';
        font-size: 12px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right:0;
        bottom:0;
        padding: 0.46875rem;
        box-shadow: 0 5px 10px ${props => props.theme.GRAY_200};
        box-sizing: border-box;
    }

    /** Tablets */
    @media screen and (max-width: 748px) {
        img {
            height: 105px;
            width: 105px;
        }
        ::after {
            height:27px;
            width:27px;
        }
    }
`