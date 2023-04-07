import { ReactNode } from "react"
import { IUser } from "./user"
import { IRepository } from "./repository"

export interface IContextUserGithubValues {
    /** Usuário do perfil*/
    user: IUser,
    /** Repositórios do usuário */
    repositories: IRepository[]
}

export interface IContextUserGithubProps {
    /** Components que consumirão o contexto de usuário do github */
    children: ReactNode
}