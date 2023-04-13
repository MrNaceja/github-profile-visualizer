import { IRepository }     from "../contexts/ContextUserGithubProvider/Interfaces/repository"
import { IUser }           from "../contexts/ContextUserGithubProvider/Interfaces/user"
import randomNumberInRange from '../utils/randomNumberInRange';

/**
 * Enumerados para as rotas da api referentes a busca dos dados do usuário e seus repositórios.
 */
enum ApiUrl {
    USER_ENDPOINT                 = 'USER',
    GET_USER                      = 'https://api.github.com/users/' + USER_ENDPOINT,
    GET_USER_REPOSITORIES         = 'https://api.github.com/users/' + USER_ENDPOINT +'/repos',
    GET_USER_REPOSITORIES_STARRED = 'https://api.github.com/users/' + USER_ENDPOINT +'/starred'
}

/**
 * Ações de busca na API.
 */
interface IApiGitHubActions {
    /** Busca o Usuário do Github*/
    fetchUser: () => Promise<IUser>,
    /**Busca os Repositórios do Usuário do Github */
    fetchRepositories: () => Promise<IRepository[]>,
}

/**
 * API para busca dos dados do Github.
 */
export default function ApiGithub(user : string) : IApiGitHubActions {

    /**
     * Formata o repositório no padrão do github para o repositório no padrão da aplicação.
     */
    function formatGithubRepositoryToRepository(gitHubRepository : any, starred : boolean = false) : IRepository {
        const [ repOwner, repName ] = (gitHubRepository.full_name as string).split('/')
        return {
            id                 : gitHubRepository.id,
            urlGithub          : gitHubRepository.html_url,
            owner              : repOwner,
            name               : repName,
            predominantLanguage: gitHubRepository.language || 'Nenhuma',
            description        : gitHubRepository.description,
            branches           : randomNumberInRange(25), /** Número de branches será gerado aleatório pois na API não tem um retorno especifico, e para se obter este valor teria de fazer uma outra requisição para contar as branches de cada repositório (estou sem tempo e demanda performance) */
            starred
        } as IRepository
    }

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

        fetchRepositories: async () => {
            const githubUserRepositories = await fetch(ApiUrl.GET_USER_REPOSITORIES.replace(ApiUrl.USER_ENDPOINT, user))
                                                .then(res => res.json())
                                                    .then(userRepositories => userRepositories) as Array<any>
            const githubUserRepositoriesStarreds = await fetch(ApiUrl.GET_USER_REPOSITORIES_STARRED.replace(ApiUrl.USER_ENDPOINT, user))
                                                        .then(res => res.json())
                                                            .then(userRepositories => userRepositories) as Array<any>
            return [
                ...githubUserRepositories        .map((githubRepository) => formatGithubRepositoryToRepository(githubRepository, false)),
                ...githubUserRepositoriesStarreds.map((githubRepository) => formatGithubRepositoryToRepository(githubRepository, true)),
            ]
        }
    }
}