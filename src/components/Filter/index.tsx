import { CaretDown } from 'phosphor-react';

import * as Styled from './styled'

interface IFilterProps {
    placeholder: string
}

export default function Filter({ placeholder } : IFilterProps) {
    return (
        <Styled.Container>
            <Styled.FilterSelect>
                <Styled.FilterIcon>
                    <CaretDown size={20} weight="bold"/>
                </Styled.FilterIcon>
                <Styled.FilterValue placeholder={placeholder} />
            </Styled.FilterSelect>
        </Styled.Container>
    )
}