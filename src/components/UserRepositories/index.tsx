import { useState }           from 'react'
import useRepositories        from '../../contexts/ContextUserGithubProvider/hooks/useRepositories'
import * as Styled            from './styled'
import { BookBookmark, Star } from 'phosphor-react'
import Search                 from '../Search'
import Repository             from '../Repository'
import Filters, { IFilter }   from '../Filters'
import { IRepository }        from '../../contexts/ContextUserGithubProvider/Interfaces/repository'

/**
 * Abas de Repositório.
 */
export enum Tabs {
    TAB_REPOSITORIES = 'TAB_REPOSITORIES',
    TAB_STARRED      = 'TAB_STARRED'
}

/**
 * Componente de Visualização dos Repositórios do Usuário.
 */
export default function UserRepositories() {
    const { repositories, 
            repositoriesStarreds : starreds, 
            totalRepositories, 
            totalRepositoriesStarred }               = useRepositories()
    const [ activeTab, setActiveTab ]                = useState<Tabs>(Tabs.TAB_REPOSITORIES)
    const [ filteredLanguages, setFilteredLanguages] = useState<string[]>([])
    const [ filteredTypes, setFilteredTypes]         = useState<string[]>(['All'])

    const predominantLanguages = [...new Set([...repositories.map(rep => rep.predominantLanguage)])]

    const filters : IFilter[] = [
        {
            group: 'Languages',
            values: predominantLanguages,
            valuesState: filteredLanguages,
            setValuesState: setFilteredLanguages
        },
        {
            group: 'Types',
            values: ['All', 'Sources', 'Forks', 'Archived', 'Mirrors'],
            valuesState: filteredTypes,
            setValuesState: setFilteredTypes
        }
    ]

    /**
     * Filtra os repositórios pela linguagem predominante conforme filtros aplicados.
     */
    function filterRepositoriesByLanguages(repositoriesToFilter : IRepository[]) : IRepository[] {
        const filterAllLanguages = filteredLanguages.length == 0
        return repositoriesToFilter.filter(rep => filterAllLanguages || filteredLanguages.includes(rep.predominantLanguage))
    }

    const repositoriesFiltered = filterRepositoriesByLanguages(repositories)
    const starredsFiltered     = filterRepositoriesByLanguages(starreds)

    return (
        <Styled.Container orientation="horizontal" defaultValue={activeTab} value={activeTab} onValueChange={tab => setActiveTab(tab as Tabs)}>
            <Styled.HeaderTab>
                <Styled.HeaderTabIndicators>
                    <Styled.TabIndicator counter={totalRepositories} value={Tabs.TAB_REPOSITORIES}> <BookBookmark size={24} weight="bold"/> Repositories </Styled.TabIndicator>
                    <Styled.TabIndicator counter={totalRepositoriesStarred} value={Tabs.TAB_STARRED}> <Star size={24} weight="bold" /> Starred </Styled.TabIndicator>
                </Styled.HeaderTabIndicators>
                <Styled.HeaderTabSearchFilters>
                    <Search activeTab={activeTab}/>
                    <Filters filters={filters}/>
                </Styled.HeaderTabSearchFilters>
            </Styled.HeaderTab>
            <Styled.TabView value={Tabs.TAB_REPOSITORIES}>
                <Styled.TabViewHint><strong>{repositoriesFiltered.length}</strong> Repositórios encontrados</Styled.TabViewHint>
                {
                    repositoriesFiltered.map(rep => (
                        <Repository repository={rep} key={rep.id}/>
                    ))
                }
            </Styled.TabView>
            <Styled.TabView value={Tabs.TAB_STARRED}>
                <Styled.TabViewHint><strong>{starredsFiltered.length}</strong> Repositórios favoritados encontrados</Styled.TabViewHint>
                {
                    starredsFiltered.map(repStarred => (
                        <Repository repository={repStarred} key={repStarred.id}/>
                    ))
                }
            </Styled.TabView>
        </Styled.Container>
    )
}