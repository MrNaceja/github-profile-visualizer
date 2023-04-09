import styled, { css } from "styled-components";
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'

export const Container = styled(Root)`
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
`

export const HeaderTab = styled.nav`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3.5625rem;
`

export const HeaderTabIndicators = styled(List)`
    height: 2.5rem;
    display: flex;
    align-items: flex-start;
    gap: 3.5625rem;

    /** Mobile */
    @media screen and (max-width: 480px) {
        gap:0;
        justify-content: space-between;
    }
`
export const HeaderTabSearchFilters = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    
    /** Mobile */
    @media screen and (max-width:480px) {
        flex-direction: row-reverse;
    }
`

type TStyledTabIndicatorProps = {
    /** Número indicador presente ao lado do nome da tab */
    counter: number
}

export const TabIndicator = styled(Trigger) <TStyledTabIndicatorProps>`
    display: flex;
    height: 100%;
    align-items: center;
    gap: 1rem;
    background: none;
    border:none;
    font-size: 1.125rem;
    color: ${props => props.theme.GRAY_300};
    border-bottom: 2px solid transparent;
    position:relative;
    cursor: pointer;
    transition: .3s;

    ::after {
        content: '${({ counter }) => counter}';
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        width: 2.5rem;
        font-size: 0.875rem;
        border-radius: 59px;
        transition: .5s;
        ${({theme}) => css`
            background: ${theme.GRAY_200};
            color: ${theme.GRAY_300};
            border: 1px solid ${theme.GRAY_300};
        `}
    }

    &[data-state='inactive']:hover {
        color: ${props => props.theme.GRAY_800};
    }

    &[data-state='active'] {
        border-bottom: 2px solid ${props => props.theme.SECONDARY_500};
        color: ${props => props.theme.GRAY_800};
    }

    /** A partir de Tablets */
    @media screen and (max-width: 748px) {
        font-size: 1rem;
    }
    
`

export const TabView = styled(Content)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3.125rem;
    flex: 1;

    &:not([data-state='active']) {
        display: none;
    }
`