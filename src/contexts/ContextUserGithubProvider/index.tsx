import { createContext, useContext, useEffect, useState } from "react";
import ApiGithub from "../../api/ApiGithub";
import { IUser } from "./Interfaces/user";
import { IContextUserGithubProps, IContextUserGithubValues } from "./Interfaces/context";
import { IRepository } from "./Interfaces/repository";
import Loading from "../../components/Loading";

export const ContextUserGithub = createContext({} as IContextUserGithubValues)

/** Mudar aqui para ver outros perfis */
const USER_PROFILE_TO_INTERFACE = 'MrNaceja';

export default function ContextUserGithubProvider({ children } : IContextUserGithubProps) {
    const [user, setUser]                     = useState<IUser>({} as IUser)
    const [repositories, setRepositories]     = useState<IRepository[]>([])
    const [starreds, setStarreds]             = useState<IRepository[]>([])
    const [loadingProfile, setLoadingProfile] = useState(true)

    async function searchRepositories(search? : string) {
        if (!search || search.length == 0) {
            return loadRepositories()
        }
        setRepositories(reposState => reposState.filter(rep => rep.name.toLowerCase().match(search.toLowerCase())))
    }

    async function searchRepositoriesStarreds(search? : string) {
        if (!search || search.length == 0) {
            return loadStarredRepositories()
        }
        setStarreds(starredState => starredState.filter(starred => starred.name.toLowerCase().match(search.toLowerCase())))
    }

    async function loadRepositories() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userRepositories = await Api.fetchRepositories()
        setRepositories(userRepositories)
    }

    async function loadStarredRepositories() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const userStarredRepositories = await Api.fetchRepositories(true)
        setStarreds(userStarredRepositories)
    }

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
        }, 3000)
        // setLoadingProfile(loadState => {
        //     document.title = 'Github Profile | ' + userProfile.name
        //     return false
        // })
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
            : children }
        </ContextUserGithub.Provider>
    )
}