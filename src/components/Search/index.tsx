import { FormEvent, useContext, useEffect, useState } from 'react'
import * as Styled                                    from './styled'
import { ContextUserGithub }                          from '../../contexts/ContextUserGithubProvider'
import { MagnifyingGlass }                            from 'phosphor-react'
import { Tabs }                                       from '../UserRepositories'

interface ISearchProps {
    /** Aba ativa para pesquisa */
    tab: Tabs
}

/**
 * Componente de Barra de Pesquisa.
 */
export default function Search({ tab } : ISearchProps) {
    const [inputSearch, setInputSearch] = useState('')
    const { searchRepositories, searchRepositoriesStarreds } = useContext(ContextUserGithub)

    function onSubmitSearchRepositories(e : FormEvent) {
        e.preventDefault()
        switch (tab) {
            case Tabs.TAB_REPOSITORIES:
                searchRepositories(inputSearch)
            break
            case Tabs.TAB_STARRED:
                searchRepositoriesStarreds(inputSearch)
            break
        }
    }

    useEffect(() => {
        setInputSearch('')
    }, [tab])

    return (
        <Styled.Container onSubmit={onSubmitSearchRepositories}>
            <Styled.SearchButton type="submit">
                <MagnifyingGlass size={24}/>
            </Styled.SearchButton>
            <Styled.SearchInput 
                placeholder='Search Here' 
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
        </Styled.Container>
    )
}