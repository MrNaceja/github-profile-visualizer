import { IRepository } from "../contexts/ContextUserGithubProvider/Interfaces/repository"
import { IUser } from "../contexts/ContextUserGithubProvider/Interfaces/user"
import randomNumberInRange from '../utils/randomNumberInRange';

enum ApiUrl {
    USER_ENDPOINT                 = 'USER',
    GET_USER                      = 'https://api.github.com/users/' + USER_ENDPOINT,
    GET_USER_REPOSITORIES         = 'https://api.github.com/users/' + USER_ENDPOINT +'/repos',
    GET_USER_REPOSITORIES_STARRED = 'https://api.github.com/users/' + USER_ENDPOINT +'/starred'
}

interface IApiGitHubActions {
    fetchUser:         () => Promise<IUser>,
    fetchRepositories: (bStarred? : boolean) => Promise<IRepository[]>,
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

        fetchRepositories: async (bStarred : boolean = false) => {
            const URL_GET_USER_REPOSITORIES = bStarred ? ApiUrl.GET_USER_REPOSITORIES_STARRED : ApiUrl.GET_USER_REPOSITORIES
            const githubUserRepos = await fetch(URL_GET_USER_REPOSITORIES.replace(ApiUrl.USER_ENDPOINT, user))
                                            .then(res => res.json())
                                                .then(userRepositories => userRepositories) as Array<any>
            return githubUserRepos.reduce((rep, githubRep) => {
                const [ repOwner, repName ] = (githubRep.full_name as string).split('/')
                rep.push({
                    id:githubRep.id,
                    urlGithub: githubRep.html_url,
                    owner: repOwner,
                    name: repName,
                    predominantLanguage: githubRep.language || 'Nenhuma',
                    description: githubRep.description,
                    branches: randomNumberInRange(25) /** Número de branches será gerado aleatório pois na API não tem um retorno especifico, e para se obter este valor teria de fazer uma outra requisição para contar as branches de cada repositório (estou sem tempo e demanda performance) */
                } as IRepository)
                return rep
            }, [] as IRepository[])
        }
    }
}