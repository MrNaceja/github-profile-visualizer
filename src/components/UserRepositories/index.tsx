import { BookBookmark, Star } from 'phosphor-react'
import * as Styled from './styled'
import Search from '../Search'
import Filter from '../Filter'
import Repository from '../Repository'
import { useState } from 'react'
import useRepositories from '../../contexts/ContextUserGithubProvider/hooks/useRepositories'

enum Tabs {
    TAB_REPOSITORIES = 'TAB_REPOSITORIES',
    TAB_STARRED      = 'TAB_STARRED'
}

export default function UserRepositories() {
    const repositories = useRepositories()
    
    const countRepositories = repositories.length
    const countStarred      = repositories.filter(rep => rep.starred).length

    return (
        <Styled.Container orientation="horizontal" defaultValue={Tabs.TAB_REPOSITORIES}>
            <Styled.HeaderTab>
                <Styled.HeaderTabIndicators>
                    <Styled.TabIndicator counter={countRepositories} value={Tabs.TAB_REPOSITORIES}> <BookBookmark size={24} weight="bold"/> Repositories </Styled.TabIndicator>
                    <Styled.TabIndicator counter={countStarred} value={Tabs.TAB_STARRED}> <Star size={24} weight="bold" /> Starred </Styled.TabIndicator>
                </Styled.HeaderTabIndicators>
                <Styled.HeaderTabSearchFilters>
                    <Search />
                    <Styled.FiltersArea>
                        <Filter placeholder="Type"/>
                        <Filter placeholder="Language"/>
                    </Styled.FiltersArea>
                </Styled.HeaderTabSearchFilters>
            </Styled.HeaderTab>
            <Styled.TabView value={Tabs.TAB_REPOSITORIES}>
                {
                    repositories.map(rep => (
                        <Repository repository={rep}/>
                    ))
                }
            </Styled.TabView>
            <Styled.TabView value={Tabs.TAB_STARRED}>
                {
                    repositories.map(rep => (
                        rep.starred && <Repository repository={rep}/>
                    ))
                }
            </Styled.TabView>
        </Styled.Container>
    )
}