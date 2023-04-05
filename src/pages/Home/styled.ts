import styled from "styled-components";

export const Container = styled.section`
    gap:2rem;
    display: flex;
    flex-direction: column;
`
export const Logo = styled.div`
    display: flex;
    align-items:center;
    justify-content: flex-start;
    height: 100%;
    column-gap: 1.375rem;

    & span {
        font-size:1.5rem;
        color: ${props => props.theme.GRAY_100};
        font-weight: bold;
    }
    & h1 {
        color: ${props => props.theme.GRAY_100};
        font-weight: 300;
    }

    & img {
        max-height: 100%;
    }

    & img:first-child{
        height: 50%;
    }

`
export const Header = styled.header`
    height: 4.5rem;
    width:100%;
    padding:.5rem;
    background: ${props => props.theme.GRAY_800};
    padding:0 5rem;

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const GridProfile = styled.main`
    display: grid;
    padding:0 5rem;
    grid-template-columns: 1fr 2fr;
`

