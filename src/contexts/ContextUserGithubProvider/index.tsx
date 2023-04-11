import { createContext, useEffect, useState }                from "react";
import ApiGithub                                             from "../../api/ApiGithub";
import Loading                                               from "../../components/Loading";
import { IUser }                                             from "./Interfaces/user";
import { IRepository }                                       from "./Interfaces/repository";
import { IContextUserGithubProps, IContextUserGithubValues } from "./Interfaces/context";

/**
 * Contexto de Usuário.
 */
export const ContextUserGithub = createContext({} as IContextUserGithubValues)

/**
 * @tutorial Mudar aqui para ver outros perfis.
 * Certifique-se de informar corretamente o nome de usuário do github para ver seus dados refletidos na interface (não há tratammento de erro).
 */
const USER_PROFILE_TO_INTERFACE = 'MrNaceja';

/**
 * Provedor do contexto de usuário do github para a aplicação.
 * Mostra uma tela de carregamento enquanto o perfil não é carregado.
 */
export default function ContextUserGithubProvider({ children } : IContextUserGithubProps) {
    const [user, setUser]                     = useState<IUser>({} as IUser)
    const [repositories, setRepositories]     = useState<IRepository[]>([])
    const [starreds, setStarreds]             = useState<IRepository[]>([])
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
     * Realiza uma pesquisa nos repositórios favoritados.
     */
    async function searchRepositoriesStarreds(search? : string) {
        if (!search || search.length == 0) {
            return loadStarredRepositories()
        }
        setStarreds(starredState => starredState.filter(starred => starred.name.toLowerCase().match(search.toLowerCase())))
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
     * Carrega os repositórios favoritados inicialmente.
     */
    async function loadStarredRepositories() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userStarredRepositories = await Api.fetchRepositories(true)
        setStarreds(userStarredRepositories)
    }

    /**
     * Realiza o carregamento inicial do perfil do usuário.
     */
    async function loadProfile() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userProfile =  await Api.fetchUser()
        setUser(userProfile)
        loadRepositories()
        loadStarredRepositories()
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
            starreds,
            searchRepositories,
            searchRepositoriesStarreds
        }}>
            { 
                loadingProfile 
                ? <Loading message={'Aguarde, carregando perfil de ('+ USER_PROFILE_TO_INTERFACE + ')...'} /> 
                : children 
            }
        </ContextUserGithub.Provider>
    )
}