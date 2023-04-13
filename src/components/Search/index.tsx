import { FormEvent, useContext, useEffect, useState } from 'react'
import * as Styled                         from './styled'
import { ContextUserGithub }               from '../../contexts/ContextUserGithubProvider'
import { MagnifyingGlass }                 from 'phosphor-react'
import { Tabs } from '../UserRepositories'

interface ISearchProps {
    /** Aba ativa no momento */
    activeTab: Tabs
}

/**
 * Componente de Barra de Pesquisa.
 */
export default function Search({ activeTab } : ISearchProps) {
    const [inputSearch, setInputSearch] = useState('')
    const { searchRepositories } = useContext(ContextUserGithub)

    function onSubmitSearchRepositories(e : FormEvent) {
        e.preventDefault()
        searchRepositories(activeTab, inputSearch)
    }

    useEffect(() => {
        setInputSearch('')
    }, [activeTab])

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