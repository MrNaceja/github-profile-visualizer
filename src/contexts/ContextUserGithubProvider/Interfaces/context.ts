import { ReactNode }   from "react"
import { IUser }       from "./user"
import { IRepositoriesState } from "./reducerRepositories"
import { Tabs } from "../../../components/UserRepositories"

export interface IContextUserGithubValues {
    /** Usuário do perfil*/
    user: IUser,
    /** Estados dos Repositórios do usuário */
    repositoriesState: IRepositoriesState,
    /** Realiza a busca dos Repositórios pelo nome */
    searchRepositories: (activeTab : Tabs, search? : string) => void
}

export interface IContextUserGithubProps {
    /** Componentes que consumirão o contexto de usuário do github */
    children: ReactNode
}