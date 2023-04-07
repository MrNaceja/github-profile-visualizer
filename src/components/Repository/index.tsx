import { GitBranch } from 'phosphor-react'
import * as Styled from './styled'
import { IRepository } from '../../contexts/ContextUserGithubProvider/Interfaces/repository'

interface IRepositoryProps {
    /** Modelo de dados do Repositório */
    repository: IRepository
}

export default function Repository({ repository } : IRepositoryProps) {
    return (
        <Styled.Container>
            <Styled.Title>Magazord teste / <strong>Front-end</strong></Styled.Title>
            <Styled.Description>Tempor qui proident culpa mollit quis amet consectetur elit consectetur in labore anim officia mollit.</Styled.Description>
            <Styled.Information>
                <Styled.PredominantLanguage>React</Styled.PredominantLanguage>
                <Styled.BranchesIndicator>
                    <GitBranch size={20} />
                    325
                </Styled.BranchesIndicator>
            </Styled.Information>
        </Styled.Container>
    )
}