export interface IRepository {
    /** Nome do Repositório */
    owner: string,
    /** Workspace do Repositório */
    name: string,
    /** URL para acesso ao Repositório no github */
    urlGithub: string,
    /** Descrição do Repositório */
    description?: string,
    /** Linguagem Predominante */
    predominantLanguage: string,
    /** Quantidade de Branches do Repositório */
    branches: number,
}