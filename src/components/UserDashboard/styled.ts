import styled, { css } from "styled-components";
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'


export const Container = styled(Root)`

`

export const HeaderTab = styled(List)`
    height: 2.5rem;
    display: flex;
    align-items: flex-start;
    gap: 3.5625rem;
    margin-bottom: 3.5625rem;
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

    ::after {
        content: '${({ counter }) => counter}';
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        width: 2.5rem;
        font-size: 0.875rem;
        border-radius: 59px;
        ${({theme}) => css`
            background: ${theme.GRAY_200};
            color: ${theme.GRAY_300};
            border: 1px solid ${theme.GRAY_300};
        `}
    }

    &[data-state='active'] {
        border-bottom: 2px solid ${props => props.theme.SECONDARY_500};
        color: ${props => props.theme.GRAY_800};
    }
    
`

export const TabView = styled(Content)``