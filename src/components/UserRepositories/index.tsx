import { BookBookmark, Star } from 'phosphor-react'

import * as Styled from './styled'

import Search from '../Search'
import Repository from '../Repository'
import useRepositories from '../../contexts/ContextUserGithubProvider/hooks/useRepositories'
import Filters from '../Filters'

enum Tabs {
    TAB_REPOSITORIES = 'TAB_REPOSITORIES',
    TAB_STARRED      = 'TAB_STARRED'
}

export default function UserRepositories() {
    const [ repositories, starreds ] = useRepositories(true)

    return (
        <Styled.Container orientation="horizontal" defaultValue={Tabs.TAB_REPOSITORIES}>
            <Styled.HeaderTab>
                <Styled.HeaderTabIndicators>
                    <Styled.TabIndicator counter={repositories.length} value={Tabs.TAB_REPOSITORIES}> <BookBookmark size={24} weight="bold"/> Repositories </Styled.TabIndicator>
                    <Styled.TabIndicator counter={starreds.length} value={Tabs.TAB_STARRED}> <Star size={24} weight="bold" /> Starred </Styled.TabIndicator>
                </Styled.HeaderTabIndicators>
                <Styled.HeaderTabSearchFilters>
                    <Search />
                    <Filters />
                </Styled.HeaderTabSearchFilters>
            </Styled.HeaderTab>
            <Styled.TabView value={Tabs.TAB_REPOSITORIES}>
                {
                    repositories.map(rep => (
                        <Repository repository={rep} key={rep.id}/>
                    ))
                }
            </Styled.TabView>
            <Styled.TabView value={Tabs.TAB_STARRED}>
                {
                    starreds.map(repStarred => (
                        <Repository repository={repStarred} key={repStarred.id}/>
                    ))
                }
            </Styled.TabView>
        </Styled.Container>
    )
}