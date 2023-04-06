import styled, { css } from "styled-components";
import * as Select from '@radix-ui/react-select';
import { CaretDown } from "phosphor-react";

export const Container = styled(Select.Root)``

export const FilterSelect = styled(Select.Trigger)`
    padding: 0.59375rem 1rem;
    border-radius: 42px;
    border: none;
    color: ${props => props.theme.GRAY_100};
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    
    ${({theme}) => css`
        background: linear-gradient(to right, ${theme.PRIMARY_800}, ${theme.PRIMARY_500});
    `}
`
export const FilterValue = styled(Select.Value)``

export const FilterIcon = styled(Select.Icon)`
    color: ${props => props.theme.GRAY_100};
    display: grid;
    place-items: center;
`