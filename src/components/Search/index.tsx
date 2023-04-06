import { MagnifyingGlass } from 'phosphor-react'
import * as Styled from './styled'

export default function Search() {
    return (
        <Styled.Container>
            <Styled.SearchButton type="button">
                <MagnifyingGlass size={24}/>
            </Styled.SearchButton>
            <Styled.SearchInput placeholder='Search Here'/>
        </Styled.Container>
    )
}