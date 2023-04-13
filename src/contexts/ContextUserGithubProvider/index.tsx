import { createContext, useEffect, useState }                from "react";
import ApiGithub                                             from "../../api/ApiGithub";
import Loading                                               from "../../components/Loading";
import { IUser, USER_PROFILE_TO_INTERFACE }                  from "./Interfaces/user";
import { IRepository }                                       from "./Interfaces/repository";
import { IContextUserGithubProps, IContextUserGithubValues } from "./Interfaces/context";

/**
 * Contexto de Usuário.
 */
export const ContextUserGithub = createContext({} as IContextUserGithubValues)

/**
 * Provedor do contexto de usuário do github para a aplicação.
 * Mostra uma tela de carregamento enquanto o perfil não é carregado.
 */
export default function ContextUserGithubProvider({ children } : IContextUserGithubProps) {
    const [user, setUser]                     = useState<IUser>({} as IUser)
    const [repositories, setRepositories]     = useState<IRepository[]>([])
    const [loadingProfile, setLoadingProfile] = useState(true)

    /**
     * Realiza uma pesquisa nos repositórios.
     */
    async function searchRepositories(search? : string) {
        if (!search || search.length == 0) {
            return loadRepositories()
        }
        setRepositories(reposState => reposState.filter(rep => rep.name.toLowerCase().match(search.toLowerCase())))
    }

    /**
     * Carrega os repositórios inicialmente.
     */
    async function loadRepositories() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userRepositories = await Api.fetchRepositories()
        setRepositories(userRepositories)
    }

    /**
     * Realiza o carregamento inicial do perfil do usuário.
     */
    async function loadProfile() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userProfile =  await Api.fetchUser()
        setUser(userProfile)
        loadRepositories()
        setTimeout(() => { /** Forçando um delay a mais para ver a tela de carregamento melhor */
            setLoadingProfile(loadState => {
                document.title = 'Github Profile | ' + userProfile.name
                return false
            })
        }, 3500)
    }

    useEffect(() => {
        loadProfile()
    }, [])

    return (
        <ContextUserGithub.Provider value={{
            user, 
            repositories,
            searchRepositories,
        }}>
            { 
                loadingProfile 
                ? <Loading message={'Aguarde, carregando perfil de ('+ USER_PROFILE_TO_INTERFACE + ')...'} /> 
                : children 
            }
        </ContextUserGithub.Provider>
    )
}