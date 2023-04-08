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
    const [user, setUser]                 = useState<IUser>({} as IUser)
    const [repositories, setRepositories] = useState<IRepository[]>([])
    const [starreds, setStarreds]         = useState<IRepository[]>([])
    const [loadingProfile, setLoadingProfile] = useState(true)

    async function loadProfile() {
        const Api = ApiGithub(USER_PROFILE_TO_INTERFACE)
        const [userProfile, userRepositories, userRepositoriesStarred] = [
            await Api.fetchUser(), 
            await Api.fetchRepositories(), 
            await Api.fetchRepositories(true)
        ]
        setUser        (userProfile)
        setRepositories(userRepositories)
        setStarreds    (userRepositoriesStarred)
        setTimeout(() => { /** Forçando um delay a mais para ver a tela de carregamento melhor */
            setLoadingProfile(loadState => {
                document.title = 'Github Profile | ' + userProfile.name
                return false
            })
        }, 3000)
    }

    useEffect(() => {
        loadProfile()
    }, [])

    return (
        <ContextUserGithub.Provider value={{
            user, 
            repositories,
            starreds
        }}>
            { loadingProfile ? <Loading message={'Aguarde, carregando perfil de ('+ USER_PROFILE_TO_INTERFACE + ')...'} /> : children }
        </ContextUserGithub.Provider>
    )
}