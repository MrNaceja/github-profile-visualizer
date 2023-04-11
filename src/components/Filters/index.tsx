import * as Styled from './styled'
import { Dispatch, SetStateAction, useState } from 'react';
import useRepositories from '../../contexts/ContextUserGithubProvider/hooks/useRepositories';

interface IFiltersProps {
    setLanguagesToFilter: Dispatch<SetStateAction<string[]>>
    languagesToFilter: string[]
}

export default function Filters({ languagesToFilter, setLanguagesToFilter} : IFiltersProps) {
    const [repositories, starreds] = useRepositories()
    const predominantLanguages = [...new Set(
        [
            ...repositories.map(rep => rep.predominantLanguage),
            ...starreds.map(starred => starred.predominantLanguage)
        ]
    )]
    const types = ['All', 'Sources', 'Forks', 'Archived', 'Mirrors']

    const [typesToFilter, setTypesToFilter] = useState(['All'])

    return (
        <Styled.Container>
            <Styled.Filter>
                <Styled.FilterButton />
                <Styled.FilterSelect>
                    <Styled.FilterModal>
                        <Styled.FilterSelectItemLabelGroup>Languages</Styled.FilterSelectItemLabelGroup>
                    {
                        predominantLanguages.map(lang => {
                            const isCheckedToFilter = languagesToFilter.includes(lang)
                            return (
                                <Styled.FilterSelectItem 
                                    key={lang}
                                    checked={isCheckedToFilter}
                                    onCheckedChange={(check) => {
                                        check 
                                        ? setLanguagesToFilter(curr => [...curr, lang])
                                        : setLanguagesToFilter(curr => [...curr.filter(langCurr => langCurr != lang)])
                                    }}
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
                                    onCheckedChange={(check) => {
                                        check 
                                        ? setTypesToFilter(curr => [...curr, type])
                                        : setTypesToFilter(curr => [...curr.filter(typeCurr => typeCurr != type)])
                                    }}
                                >
                                { isCheckedToFilter ? <Styled.IconCheck/> : <Styled.IconUncheck/> }
                                { type }
                                </Styled.FilterSelectItem>
                            )
                        })
                    }
                    </Styled.FilterModal>
                </Styled.FilterSelect>
            </Styled.Filter>
        </Styled.Container>
    )
}