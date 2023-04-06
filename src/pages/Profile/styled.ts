import styled from "styled-components";

export const Container = styled.section`
    gap:2rem;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    height: 4.5rem;
    width:100%;
    background: ${props => props.theme.GRAY_800};
    padding:1.3125rem 14.25rem;

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const GridUserProfile = styled.main`
    display: grid;
    padding:0 14.25rem;
    grid-template-columns: 250px 1fr;
    /* align-items: flex-start; */
`

