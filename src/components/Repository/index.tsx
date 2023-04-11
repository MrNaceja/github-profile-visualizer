import * as Styled     from './styled'
import { GitBranch }   from 'phosphor-react'
import { IRepository } from '../../contexts/ContextUserGithubProvider/Interfaces/repository'

interface IRepositoryProps {
    /** Modelo de dados do Repositório */
    repository: IRepository
}

/**
 * Componente de informações do repositório.
 */
export default function Repository({ repository } : IRepositoryProps) {
    return (
        <Styled.Container>
            <Styled.Title> {repository.owner} / <a href={repository.urlGithub} target="_blank">{repository.name}</a></Styled.Title>
            <Styled.Description>{repository.description}</Styled.Description>
            <Styled.Information>
                <Styled.PredominantLanguage>{repository.predominantLanguage}</Styled.PredominantLanguage>
                <Styled.BranchesIndicator>
                    <GitBranch size={20} />
                    {repository.branches}
                </Styled.BranchesIndicator>
            </Styled.Information>
        </Styled.Container>
    )
}