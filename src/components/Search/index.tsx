import { FormEvent, useContext, useState } from 'react'
import * as Styled                         from './styled'
import { ContextUserGithub }               from '../../contexts/ContextUserGithubProvider'
import { MagnifyingGlass }                 from 'phosphor-react'

/**
 * Componente de Barra de Pesquisa.
 */
export default function Search() {
    const [inputSearch, setInputSearch] = useState('')
    const { searchRepositories } = useContext(ContextUserGithub)

    function onSubmitSearchRepositories(e : FormEvent) {
        e.preventDefault()
        searchRepositories(inputSearch)
    }

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