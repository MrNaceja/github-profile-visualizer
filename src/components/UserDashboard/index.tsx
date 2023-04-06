import { BookBookmark, Star } from 'phosphor-react'
import * as Styled from './styled'
import Search from '../Search'

enum Tabs {
    TAB_REPOSITORIES = 'TAB_REPOSITORIES',
    TAB_STARRED      = 'TAB_STARRED'
}

export default function UserDashboard() {
    return (
        <Styled.Container orientation="horizontal" defaultValue={Tabs.TAB_REPOSITORIES}>
            <Styled.HeaderTab>
                <Styled.TabIndicator counter={81} value={Tabs.TAB_REPOSITORIES}> <BookBookmark size={24} weight="bold"/> Repositories </Styled.TabIndicator>
                <Styled.TabIndicator counter={12} value={Tabs.TAB_STARRED}> <Star size={24} weight="bold" /> Starred </Styled.TabIndicator>
            </Styled.HeaderTab>
            <Styled.TabView value={Tabs.TAB_REPOSITORIES}>
                <Styled.TabHeaderView>
                    <Search />
                </Styled.TabHeaderView>
            </Styled.TabView>
            <Styled.TabView value={Tabs.TAB_STARRED}>
                <Styled.TabHeaderView>
                    <Search />
                </Styled.TabHeaderView>
            </Styled.TabView>
        </Styled.Container>
    )
}