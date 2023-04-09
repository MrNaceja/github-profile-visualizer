import styled from "styled-components";

export const SearchInput = styled.input`
    all:unset;
    font-size: 1.125rem;
    flex:1;
`

export const Container = styled.form`
    flex:1;
    border-bottom: 1px solid ${props => props.theme.GRAY_300};
    color: ${props => props.theme.GRAY_300};
    gap: 1rem;
    display: flex;
    padding: 0.5625rem;
`


export const SearchButton = styled.button`
    background: none;
    border: none;
    cursor:pointer;
    color: ${props => props.theme.GRAY_500};
`