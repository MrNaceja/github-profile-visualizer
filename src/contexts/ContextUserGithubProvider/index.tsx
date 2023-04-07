import { createContext, useContext, useEffect, useState } from "react";
import ApiGithub from "../../api/ApiGithub";
import { IUser } from "./Interfaces/user";
import { IContextUserGithubProps, IContextUserGithubValues } from "./Interfaces/context";
import { IRepository } from "./Interfaces/repository";

export const ContextUserGithub = createContext({} as IContextUserGithubValues)

/** Mudar aqui para ver outros perfis */
const USER_PROFILE_TO_INTERFACE = 'MrNaceja';

export default function ContextUserGithubProvider({ children } : IContextUserGithubProps) {
    const [user, setUser]                 = useState<IUser>({} as IUser)
    const [repositories, setRepositories] = useState<IRepository[]>([])
    const [starreds, setStarreds]         = useState<IRepository[]>([])

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
        document.title = 'Github Profile | ' + userProfile.name
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
            { children }
        </ContextUserGithub.Provider>
    )
}