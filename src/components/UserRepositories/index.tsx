import { BookBookmark, Star } from 'phosphor-react'

import * as Styled from './styled'

import Search from '../Search'
import Repository from '../Repository'
import useRepositories from '../../contexts/ContextUserGithubProvider/hooks/useRepositories'
import Filters from '../Filters'
import { useState } from 'react'

export enum Tabs {
    TAB_REPOSITORIES = 'TAB_REPOSITORIES',
    TAB_STARRED      = 'TAB_STARRED'
}

export default function UserRepositories() {
    const [ repositories, starreds]  = useRepositories()
    const [ activeTab, setActiveTab ] = useState<Tabs>(Tabs.TAB_REPOSITORIES)
    const [ filteredLanguages, setFilteredLanguages] = useState<string[]>([])

    const filterAllLanguages = filteredLanguages.length == 0

    const starredsFiltered     = starreds.filter(starred => filterAllLanguages || filteredLanguages.includes(starred.predominantLanguage))
    const repositoriesFiltered = repositories.filter(repos => filterAllLanguages || filteredLanguages.includes(repos.predominantLanguage))

    return (
        <Styled.Container orientation="horizontal" defaultValue={activeTab} value={activeTab} onValueChange={tab => setActiveTab(tab as Tabs)}>
            <Styled.HeaderTab>
                <Styled.HeaderTabIndicators>
                    <Styled.TabIndicator counter={repositories.length} value={Tabs.TAB_REPOSITORIES}> <BookBookmark size={24} weight="bold"/> Repositories </Styled.TabIndicator>
                    <Styled.TabIndicator counter={starreds.length} value={Tabs.TAB_STARRED}> <Star size={24} weight="bold" /> Starred </Styled.TabIndicator>
                </Styled.HeaderTabIndicators>
                <Styled.HeaderTabSearchFilters>
                    <Search tab={activeTab} />
                    <Filters 
                        languagesToFilter={filteredLanguages}
                        setLanguagesToFilter={setFilteredLanguages}
                    />
                </Styled.HeaderTabSearchFilters>
            </Styled.HeaderTab>
            <Styled.TabView value={Tabs.TAB_REPOSITORIES}>
                {
                    repositoriesFiltered.map(rep => (
                        <Repository repository={rep} key={rep.id}/>
                    ))
                }
            </Styled.TabView>
            <Styled.TabView value={Tabs.TAB_STARRED}>
                {
                    starredsFiltered.map(repStarred => (
                        <Repository repository={repStarred} key={repStarred.id}/>
                    ))
                }
            </Styled.TabView>
        </Styled.Container>
    )
}