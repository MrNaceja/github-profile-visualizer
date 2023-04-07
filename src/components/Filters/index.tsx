import { CaretDown, CheckSquare, Square } from 'phosphor-react';

import * as Styled from './styled'
import { useState } from 'react';

export default function Filters() {

    const languages = ['JS', 'React', 'Java', 'PHP']
    const types = ['All', 'Sources', 'Forks', 'Archived', 'Mirrors']

    const [languagesToFilter, setLanguagesToFilter] = useState(['Java'])
    const [typesToFilter, setTypesToFilter] = useState(['All'])

    return (
        <Styled.Container>
            <Styled.Filter>
                <Styled.FilterIndicator>
                    <CaretDown size={20} weight="bold"/> Filters
                </Styled.FilterIndicator>
                <Styled.FilterModal>
                    <Styled.FilterSelect>
                        <Styled.FilterSelectItemLabelGroup>Languages</Styled.FilterSelectItemLabelGroup>
                    {
                        languages.map(lang => {
                            const isCheckedToFilter = languagesToFilter.includes(lang)
                            return (
                                <Styled.FilterSelectItem 
                                    key={lang}
                                    checked={isCheckedToFilter}
                                >
                                { isCheckedToFilter ? <Styled.IconCheck/> : <Styled.IconUncheck/> }
                                { lang }
                                </Styled.FilterSelectItem>
                            )
                        })
                    }   
                    <Styled.FilterSelectItemSeparator />
                    <Styled.FilterSelectItemLabelGroup>Types</Styled.FilterSelectItemLabelGroup>
                    {
                        types.map(type => {
                            const isCheckedToFilter = typesToFilter.includes(type)
                            return (
                                <Styled.FilterSelectItem 
                                    key={type}
                                    checked={isCheckedToFilter}
                                >
                                { isCheckedToFilter ? <Styled.IconCheck/> : <Styled.IconUncheck/> }
                                { type }
                                </Styled.FilterSelectItem>
                            )
                        })
                    }
                    </Styled.FilterSelect>
                </Styled.FilterModal>
            </Styled.Filter>
        </Styled.Container>
    )
}