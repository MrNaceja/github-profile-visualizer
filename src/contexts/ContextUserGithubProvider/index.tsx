import { createContext, useEffect, useReducer, useState }    from "react";
import ApiGithub                                             from "../../api/ApiGithub";
import Loading                                               from "../../components/Loading";
import { IUser, USER_PROFILE_TO_INTERFACE }                  from "./Interfaces/user";
import { IContextUserGithubProps, IContextUserGithubValues } from "./Interfaces/context";
import { 
    EActionsTypeRepositoriesState, 
    TPayloadTypeActionSearch }                               from './Interfaces/reducerRepositories';
import ReducerRepositories, { REPOSITORIES_INITIAL_STATE }   from "./reducers/ReducerRepositories/reducer";
import { Tabs }                                              from "../../components/UserRepositories";

/**
 * Contexto de Usuário.
 */
export const ContextUserGithub = createContext({} as IContextUserGithubValues)

/**
 * Provedor do contexto de usuário do github para a aplicação.
 * Mostra uma tela de carregamento enquanto o perfil não é carregado.
 */
export default function ContextUserGithubProvider({ children } : IContextUserGithubProps) {
    const [user, setUser]                                = useState<IUser>({} as IUser)
    const [repositoriesState, dispatchRepositoriesState] = useReducer(ReducerRepositories, REPOSITORIES_INITIAL_STATE)
    const [loadingProfile, setLoadingProfile]            = useState(true)

    /**
     * Realiza uma pesquisa nos repositórios.
     */
    async function searchRepositories(activeTab: Tabs, search? : string) {
        if (!search || search.length == 0) {
            return loadRepositories()
        }
        dispatchRepositoriesState({
            type: EActionsTypeRepositoriesState.ACTION_SEARCH_REPOSITORIES,
            payload: {search, activeTab } as TPayloadTypeActionSearch
        })
    }

    /**
     * Carrega os repositórios inicialmente.
     */
    async function loadRepositories() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userRepositories = await Api.fetchRepositories()
        dispatchRepositoriesState({
            type: EActionsTypeRepositoriesState.ACTION_LOAD_REPOSITORIES,
            payload: userRepositories
        })
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
            repositoriesState,
            searchRepositories
        }}>
            { 
                loadingProfile 
                ? <Loading message={'Aguarde, carregando perfil de ('+ USER_PROFILE_TO_INTERFACE + ')...'} /> 
                : children 
            }
        </ContextUserGithub.Provider>
    )
}