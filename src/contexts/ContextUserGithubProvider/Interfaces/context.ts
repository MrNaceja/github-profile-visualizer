import { ReactNode } from "react"
import { IUser } from "./user"
import { IRepository } from "./repository"

export interface IContextUserGithubValues {
    /** Usuário do perfil*/
    user: IUser,
    /** Repositórios do usuário */
    repositories: IRepository[],
    /** Repositórios favoritados do usuário */
    starreds: IRepository[],
    /** Realiza a busca dos Repositórios pelo nome */
    searchRepositories: (search? : string) => void
    /** Realiza a busca dos Repositórios Favoritados pelo nome */
    searchRepositoriesStarreds: (search? : string) => void
}

export interface IContextUserGithubProps {
    /** Components que consumirão o contexto de usuário do github */
    children: ReactNode
}