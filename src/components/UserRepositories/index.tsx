import { BookBookmark, Star } from 'phosphor-react'
import * as Styled from './styled'
import Search from '../Search'
import Filter from '../Filter'
import Repository from '../Repository'

enum Tabs {
    TAB_REPOSITORIES = 'TAB_REPOSITORIES',
    TAB_STARRED      = 'TAB_STARRED'
}

export default function UserRepositories() {
    return (
        <Styled.Container orientation="horizontal" defaultValue={Tabs.TAB_REPOSITORIES}>
            <Styled.HeaderTab>
                <Styled.HeaderTabIndicators>
                    <Styled.TabIndicator counter={81} value={Tabs.TAB_REPOSITORIES}> <BookBookmark size={24} weight="bold"/> Repositories </Styled.TabIndicator>
                    <Styled.TabIndicator counter={12} value={Tabs.TAB_STARRED}> <Star size={24} weight="bold" /> Starred </Styled.TabIndicator>
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
                <Repository />
                <Repository />
                <Repository />
            </Styled.TabView>
            <Styled.TabView value={Tabs.TAB_STARRED}>
                <Repository />
            </Styled.TabView>
        </Styled.Container>
    )
}