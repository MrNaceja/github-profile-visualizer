import { IUser } from "../contexts/ContextUserGithubProvider"

interface IApiGitHubActions {
    fetchUser: () => Promise<IUser>,
    fetchUserRepositories: () => Promise<void>
}

enum ApiUrl {
    USER_ENDPOINT         = 'USER',
    GET_USER              = 'https://api.github.com/users/' + USER_ENDPOINT,
    GET_USER_REPOSITORIES = 'https://api.github.com/users/' + USER_ENDPOINT +'/repos'
}

export default function ApiGithub(user : string) : IApiGitHubActions {
    return {
        fetchUser: async () => {
            const githubUser : any = await fetch(ApiUrl.GET_USER.replace(ApiUrl.USER_ENDPOINT, user))
                                            .then(res => res.json())
                                                .then(userInfo => userInfo)
            return {
                avatar: githubUser.avatar_url,
                bio: githubUser.bio,
                company: githubUser.company,
                location: githubUser.location,
                githubUrl: githubUser.html_url,
                name: githubUser.login
            } as IUser
        },
        fetchUserRepositories: async () => {
            return fetch(ApiUrl.GET_USER_REPOSITORIES.replace(ApiUrl.USER_ENDPOINT, user))
                    .then(res => res.json())
                        .then(userRepositories => userRepositories)
        }
    }
}